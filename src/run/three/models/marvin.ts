import * as THREE from 'three';

import { getByName, indexByName } from '#utils';

import { addMixer } from '../animations';
import * as B from '../betweeners';

import { createBonyTubeGeometry } from './tools/bony-tube';
import { marvinTurnTimeEasing } from './tools/marvin-tools';

export interface MarvinSizeOptions {
  legLength: number;
  legRadius: number;
  hipWidth: number;
  speed: number;
  maxStride?: number;
  strideDuration?: number;
  legSegmentCount?: number;
  sides?: number;
  armRadius?: number;
  armSegmentCount?: number;
  headRadius?: number;
  torsoOffset?: number;
  gunRadius?: number;
  gunLength?: number;
  idleTurnDelay?: number;
  idleTurnDuration?: number;
}

type Size = Required<MarvinSizeOptions> & {
  strideLength: number;
};

export class Marvin {
  public readonly object: THREE.Group;
  private actions: THREE.AnimationAction[];
  private idleActions: THREE.AnimationAction[] = [];
  private gunHeight: number;
  private _size: Size;

  private walking = false;

  constructor(
    sizeOptions: MarvinSizeOptions,
    material: THREE.Material,
    gunMaterial = material,
    bonesHelperScene?: THREE.Scene,
  ) {
    const sides = sizeOptions.sides ?? 4;
    // a stride is two steps
    const maxStride = sizeOptions.maxStride ?? sizeOptions.legLength * 2;
    const size: Size = {
      ...sizeOptions,
      legSegmentCount: sizeOptions.legSegmentCount ?? 5,
      sides,
      armRadius: sizeOptions.armRadius ?? sizeOptions.legRadius * 0.6,
      armSegmentCount: sizeOptions.armSegmentCount ?? 20,
      headRadius: sizeOptions.headRadius ?? sizeOptions.legLength / 4,
      torsoOffset:
        sizeOptions.torsoOffset ?? sizeOptions.legRadius * (1 / Math.cos(Math.PI / sides) - 1),
      gunRadius: sizeOptions.gunRadius ?? sizeOptions.legRadius,
      gunLength: sizeOptions.gunLength ?? sizeOptions.hipWidth,
      maxStride,
      ...chooseStrideLength(sizeOptions.speed, maxStride, sizeOptions.strideDuration ?? 1.2),
      idleTurnDelay: sizeOptions.idleTurnDelay ?? 20,
      idleTurnDuration: sizeOptions.idleTurnDuration ?? 1.6,
    };
    this._size = size;

    const fullObject = new THREE.Group();
    this.object = fullObject;

    const allBones: THREE.Bone[] = [
      ...createLegBones(size, 'left'),
      ...createLegBones(size, 'right'),
    ];
    const skeleton = new THREE.Skeleton(allBones);

    function addLeg(prefix: 'left' | 'right') {
      const xSign = prefix === 'right' ? 1 : -1;
      const legMesh = createLegMesh(
        createLegGeometry(size, indexByName(allBones, prefix + 'Hip')),
        getByName(allBones, prefix + 'Hip'),
        material,
        xSign * (size.hipWidth / 2 - size.legRadius),
      );
      legMesh.position.y = size.legLength;
      legMesh.rotation.z = Math.PI;
      fullObject.add(legMesh);
      legMesh.bind(skeleton);

      // add bones helper if we're given a scene for it
      if (bonesHelperScene) {
        if (!bonesHelperScene.getObjectByName(prefix + 'staticHelper')) {
          const helper = new THREE.SkeletonHelper(legMesh);
          helper.name = prefix + 'staticHelper';
          bonesHelperScene.add(helper);
        }
        bonesHelperScene.getObjectByName(prefix + 'helper')?.removeFromParent();
        const helper = new THREE.SkeletonHelper(legMesh);
        helper.name = prefix + 'helper';
        bonesHelperScene.add(helper);
      }
    }

    addLeg('left');
    addLeg('right');

    // the clip is the same for both legs
    const legClip = createLegWalkingClip(
      size.strideDuration,
      size.strideLength,
      getByName(allBones, 'rightFoot'),
    );

    const mixer = addMixer(fullObject);
    this.actions = [
      mixer.clipAction(legClip, getByName(allBones, 'leftFoot')),
      mixer.clipAction(legClip, getByName(allBones, 'rightFoot')),
    ];

    const bobGroup = new THREE.Group();
    fullObject.add(bobGroup);
    const bobHeight =
      (size.legLength - Math.sqrt(size.legLength ** 2 - (size.strideLength / 4) ** 2)) / 2;
    const bobAngle = (size.strideLength / 2 / size.legLength) * 0.15;
    const torsoBobClip = createBobClip(size.strideDuration, bobHeight);
    this.actions.push(mixer.clipAction(torsoBobClip, bobGroup));

    const torso = new THREE.Mesh(
      createTorsoGeometry(
        size.hipWidth + 2 * size.torsoOffset,
        (size.legRadius + size.torsoOffset) * 2,
        size.legLength * 0.8,
      ).translate(0, size.legLength, 0),
      material,
    );
    bobGroup.add(torso);

    const torsoTurnClip = createTurnClip(size.strideDuration, bobAngle);
    this.actions.push(mixer.clipAction(torsoTurnClip, torso));

    const head = new THREE.Mesh(
      new THREE.OctahedronGeometry(size.headRadius, 1) //
        .translate(0, size.legLength * 1.85 + size.headRadius, 0),
      material,
    );
    bobGroup.add(head);

    function addArm(side: 'right' | 'left') {
      const xMultiplier = side === 'right' ? 1 : -1;
      const arm = new THREE.Mesh(createArmGeometry(side, size), material);
      arm.position.y = size.legLength * 1.8 - size.armRadius;
      arm.position.x = xMultiplier * (size.hipWidth / 2 + size.torsoOffset);
      torso.add(arm);
    }

    addArm('left');
    addArm('right');

    const gun = new THREE.Mesh(
      new THREE.CylinderGeometry(size.gunRadius * 2.2, size.gunRadius, size.gunLength, 3, 1, false) //
        .rotateX(Math.PI / 2)
        .translate(0, 0, -size.gunLength / 2 + size.torsoOffset * 2),
      gunMaterial,
    );
    this.gunHeight = size.legLength * 1.35;
    gun.position.y = this.gunHeight;
    gun.position.z = -size.legRadius - size.torsoOffset * 4;
    torso.add(gun);

    fullObject.traverse((obj) => {
      obj.castShadow = true;
      obj.receiveShadow = true;
    });

    const gunTurnClip = createTurnClip(size.strideDuration, -bobAngle);
    this.actions.push(mixer.clipAction(gunTurnClip, gun));

    if (size.idleTurnDuration) {
      this.idleActions = createFullTurnIdleClip(
        size.idleTurnDuration,
        size.idleTurnDelay,
        size,
        this.object,
        getByName(allBones, 'leftFoot'),
        getByName(allBones, 'rightFoot'),
        mixer,
      );
    }

    // todo fixme: for some reason back-to-basics screenshot has Marvin with left leg up
    // if we automatically start idle action here
    if (!window.RWNS_TESTS) this.startIdleAction();
  }

  getGunHeight() {
    return this.gunHeight;
  }

  // todo add a speed parameter?
  startWalking() {
    for (const action of this.idleActions) {
      action.fadeOut(0.2);
    }

    if (!this.walking) {
      this.walking = true;
      const dur = this.actions[0]!.getClip().duration;
      const randomGait = dur * Math.random();

      for (const action of this.actions) {
        action.reset();
        if (action.getRoot().name.startsWith('left')) {
          // start left leg halfway through a stride
          action.time = action.getClip().duration / 2;
        }
        action.time += randomGait;
        action.fadeIn(action.getClip().duration / 2);
        action.loop = THREE.LoopRepeat;
        action.enabled = true;
        action.play();
      }
    }
  }

  stopWalking() {
    if (this.walking) {
      this.walking = false;
      for (const action of this.actions) {
        action.fadeOut(0.5);
      }

      this.startIdleAction();
    }
  }

  private startIdleAction() {
    // make the marvins not rotate in unison
    const randomTime = Math.random() * this._size.idleTurnDuration * 2;

    for (const action of this.idleActions) {
      action.reset();
      action.loop = THREE.LoopRepeat;
      action.enabled = true;
      action.time = randomTime;
      action.play();
    }
  }

  setWalking(walking: boolean) {
    if (walking) {
      this.startWalking();
    } else {
      this.stopWalking();
    }
  }
}

function createLegGeometry(size: Size, boneOffset: number) {
  const sides = 4;
  return createBonyTubeGeometry({
    boneCount: 2,
    boneOffset,
    length: size.legLength,
    radius: size.legRadius / Math.cos(Math.PI / sides),
    segmentsPerBone: size.legSegmentCount,
    sides,
  });
}

function createLegBones(size: Size, prefix: string) {
  const hip = new THREE.Bone();
  hip.name = prefix + 'Hip';

  const foot = new THREE.Bone();
  foot.name = prefix + 'Foot';
  foot.position.z = -size.legRadius;
  foot.position.y = size.legLength;
  hip.add(foot);

  // hip must be the first returned bone, other things depend on it
  return [hip, foot] as [THREE.Bone, THREE.Bone];
}

function createLegMesh(
  geometry: THREE.BufferGeometry,
  hipBone: THREE.Bone,
  material: THREE.Material,
  posX: number,
) {
  const mesh = new THREE.SkinnedMesh(geometry, material);

  mesh.add(hipBone);
  mesh.position.x = posX;

  return mesh;
}

// a stride is *two* steps
function createLegWalkingClip(duration: number, strideLength: number, foot: THREE.Bone) {
  const durations = B.tween(0, duration);
  const heights = B.tween(foot.parent!.position.y, foot.position.y);
  const lengths = B.tween(foot.position.z + strideLength / 4, foot.position.z - strideLength / 4);

  return new THREE.AnimationClip('walk', duration, [
    new THREE.KeyframeTrack(
      '.rotation[x]',
      durations(0, 0.15, 0.45, 0.75, 1),
      [0, 0, 0.7, 0, 0],
      THREE.InterpolateLinear,
    ),
    new THREE.KeyframeTrack(
      '.position[z]',
      durations(0, 0.25, 0.75, 1),
      lengths(0.5, 0, 1, 0.5),
      THREE.InterpolateLinear,
    ),
    new THREE.KeyframeTrack(
      '.position[y]',
      durations(0, 0.25, 0.4, 0.75, 1),
      heights(1, 1, 0.85, 1, 1),
      THREE.InterpolateLinear,
    ),
  ]);
}

// this is for turning in place
function createFullTurnIdleClip(
  turnDuration: number,
  timeBetweenTurns: number,
  size: Size,
  whole: THREE.Object3D,
  leftFoot: THREE.Bone,
  rightFoot: THREE.Bone,
  mixer: THREE.AnimationMixer,
): THREE.AnimationAction[] {
  const duration = turnDuration + timeBetweenTurns;
  const yRotation = whole.rotation.y;
  const actions = [];

  // whole body rotation
  actions.push(
    mixer.clipAction(
      new THREE.AnimationClip('rotate', duration, [
        new THREE.KeyframeTrack(
          `.rotation[y]`,
          [
            0,
            timeBetweenTurns,
            // if these timings change, also update tools/marvin-tools:marvinTurnTimeEasing()
            timeBetweenTurns + turnDuration * 0.1,
            timeBetweenTurns + turnDuration * 0.5,
            timeBetweenTurns + turnDuration * 0.5,
            duration - turnDuration * 0.1,
            duration,
          ],
          [
            yRotation,
            yRotation,
            yRotation + Math.PI * 0.1,
            yRotation + Math.PI,
            yRotation - Math.PI,
            yRotation - Math.PI * 0.1,
            yRotation,
          ],
          THREE.InterpolateLinear,
        ),
      ]),
      whole,
    ),
  );

  // interpolation steps so legs move smoothly in curves
  const interpolationSteps = 8;
  const fullStepCount = 5 * interpolationSteps; // 5 phases
  const timeFractions = Array.from({ length: fullStepCount + 1 }, (_, i) => i / fullStepCount);
  const times = [0, ...B.tween(timeBetweenTurns, duration)(...timeFractions)];

  // make the turn timings proceed at the same speed as the whole body turn
  const turnFractions = timeFractions.map(marvinTurnTimeEasing);

  const legWidth = 2 * size.legRadius;
  const legGap = size.hipWidth - 2 * legWidth;
  const legOffset = size.hipWidth / 2 - size.legRadius; // center of leg to center of body
  const lOut = (legOffset + (legWidth - legGap) / 2) / legOffset; // how much left leg has to move outward so it doesn't overlap with the right

  // foot is in the middle of the front of the leg's sleeve
  // so we need to rotate it appropriately
  const footOffset = Math.sqrt((size.hipWidth / 2 - size.legRadius) ** 2 + size.legRadius ** 2); // front of leg from center of body
  const footFrontAngle = Math.asin(size.legRadius / footOffset);

  // the movement happens in 5 phases, where body rotates, a foot rotates (around its center and around body center), and left leg moves out a bit not to overlap with right leg
  // body rotates at a steady rate
  // left leg (in 5 phases of body's 72°)
  //   rot:   0  -  18°, x:    0 - lOut   jumps back, moves outward
  //   rot:  18° - -54°, x: lOut - lOut   stays behind
  //   rot: -54° -  54°, x: lOut - lOut   jumps across
  //   rot:  54° - -18°, x: lOut - lOut   stays behind
  //   rot: -18° -   0 , x: lOut -    0   jumps forward, moves back inward
  // right leg (in 5 phases of body's 72°)
  //   rot:   0  - -72°  stays behind
  //   rot: -72° -  36°  jumps across
  //   rot:  36° - -36°  stays behind
  //   rot: -36° -  72°  jumps across
  //   rot:  72° -   0   stays behind

  const leftRotation = B.multiplyScalar(-Math.PI / 180, B.multiTween(0, 18, -54, 54, -18, 0));
  const leftXOut = B.multiTween(1, lOut, lOut, lOut, lOut, 1);

  const origLeftX = leftFoot.position.x - footOffset * Math.cos(footFrontAngle);
  const origLeftZ = leftFoot.position.z + footOffset * Math.sin(footFrontAngle);

  const leftX = turnFractions.map((f) => {
    const offset = footOffset * leftXOut(f)[0];
    return origLeftX + offset * Math.cos(leftRotation(f)[0] + footFrontAngle);
  });
  const leftZ = turnFractions.map((f) => {
    const offset = footOffset * leftXOut(f)[0];
    return origLeftZ - offset * Math.sin(leftRotation(f)[0] + footFrontAngle);
  });

  const rightRotation = B.multiplyScalar(-Math.PI / 180, B.multiTween(0, -72, 36, -36, 72, 0));

  const origRightX = rightFoot.position.x + footOffset * Math.cos(footFrontAngle);
  const origRightZ = rightFoot.position.z + footOffset * Math.sin(footFrontAngle);

  const rightX = turnFractions.map((f) => {
    return origRightX - footOffset * Math.cos(-rightRotation(f)[0] + footFrontAngle);
  });
  const rightZ = turnFractions.map((f) => {
    return origRightZ - footOffset * Math.sin(-rightRotation(f)[0] + footFrontAngle);
  });

  actions.push(
    mixer.clipAction(
      new THREE.AnimationClip('leftFootRotation', duration, [
        new THREE.KeyframeTrack(
          `.rotation[y]`,
          times,
          repeatFirstElement(leftRotation(...turnFractions)),
          THREE.InterpolateLinear,
        ),
        new THREE.KeyframeTrack(
          `.position[x]`,
          times,
          repeatFirstElement(leftX),
          THREE.InterpolateLinear,
        ),
        new THREE.KeyframeTrack(
          `.position[z]`,
          times,
          repeatFirstElement(leftZ),
          THREE.InterpolateLinear,
        ),
      ]),
      leftFoot,
    ),
  );
  actions.push(
    mixer.clipAction(
      new THREE.AnimationClip('rightFootRotation', duration, [
        new THREE.KeyframeTrack(
          `.rotation[y]`,
          times,
          repeatFirstElement(rightRotation(...turnFractions)),
          THREE.InterpolateLinear,
        ),
        new THREE.KeyframeTrack(
          `.position[x]`,
          times,
          repeatFirstElement(rightX),
          THREE.InterpolateLinear,
        ),
        new THREE.KeyframeTrack(
          `.position[z]`,
          times,
          repeatFirstElement(rightZ),
          THREE.InterpolateLinear,
        ),
      ]),
      rightFoot,
    ),
  );

  return actions;
}

function repeatFirstElement<T>(arr: T[]): T[] {
  return [arr[0]!, ...arr];
}

function createBobClip(duration: number, height: number) {
  const durations = B.tween(0, duration);
  const heights = B.tween(-height, 0);

  return new THREE.AnimationClip('bob', duration, [
    new THREE.KeyframeTrack(
      '.position[y]',
      durations(0, 0.25, 0.5, 0.75, 1),
      heights(1, 0, 1, 0, 1),
      THREE.InterpolateLinear,
    ),
  ]);
}

function createTurnClip(duration: number, angle: number) {
  const durations = B.tween(0, duration);
  const angles = B.tween(0, angle);

  return new THREE.AnimationClip('bob', duration, [
    new THREE.KeyframeTrack(
      '.rotation[y]',
      durations(0, 0.25, 0.75, 1),
      angles(0, -1, 1, 0),
      THREE.InterpolateLinear,
    ),
  ]);
}

function createTorsoGeometry(width: number, depth: number, length: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, -depth / 2);
  shape.lineTo(-width / 2, depth / 2);
  shape.lineTo(width / 2, depth / 2);
  shape.lineTo(width / 2, -depth / 2);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: length,
    bevelSize: length / 7,
    bevelEnabled: true,
    bevelOffset: -length / 7,
    bevelSegments: 1,
    bevelThickness: length / 10,
  });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

type V3Array = [number, number, number];
function v([x, y, z]: V3Array): THREE.Vector3 {
  return new THREE.Vector3(x, y, z);
}

function c(v0: V3Array, v1: V3Array, v2: V3Array, v3: V3Array) {
  return new THREE.CubicBezierCurve3(v(v0), v(v1), v(v2), v(v3));
}

function createArmGeometry(side: 'left' | 'right', size: Size) {
  const dir = side === 'right' ? 1 : -1;
  const r = size.armRadius;
  const midX = dir * (size.hipWidth / 2 + size.torsoOffset);
  const midY = size.legLength * 0.6;
  const path = new THREE.CurvePath<THREE.Vector3>();

  const bezPoints: V3Array[] = [
    [0, 0, 0],
    [dir * r, 0, 0],
    [dir * r * 2, -r, 0],
    [dir * r * 2, -r * 2, 0],
    [dir * r * 2, -r * 3, 0],
    [dir * r * 1, -midY, 0],
    [-midX, -midY, 0],
  ];
  for (let i = 0; i < bezPoints.length - 3; i += 3) {
    path.add(c(bezPoints[i]!, bezPoints[i + 1]!, bezPoints[i + 2]!, bezPoints[i + 3]!));
  }

  // have one arm raised a bit higher with a spread angle
  const armSpread = (Math.PI / 180) * (40 + dir * 10);

  return new THREE.TubeGeometry(path, size.armSegmentCount, r, 8).rotateX(armSpread);
}

const minStrideFraction = 0.2;
/**
 * Choose a sensible stride for a given speed and step size.
 * For faster, we'll do steps quicker. For slower, we'll make smaller steps.
 * For very slow, we'll make tiny steps very slowly.
 */
function chooseStrideLength(
  speed: number,
  maxStride: number,
  preferredStrideTime: number,
): {
  strideDuration: number;
  strideLength: number;
} {
  if (speed > maxStride / preferredStrideTime) {
    return {
      strideLength: maxStride,
      strideDuration: maxStride / speed,
    };
  } else if (speed > (maxStride / preferredStrideTime) * minStrideFraction) {
    return { strideLength: speed * preferredStrideTime, strideDuration: preferredStrideTime };
  } else {
    const stride = maxStride * minStrideFraction;
    return { strideLength: stride, strideDuration: stride / speed };
  }
}

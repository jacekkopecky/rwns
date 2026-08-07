import * as THREE from 'three';

import { addMixer, betweener } from '../animations';

const bodyColor = 0x707070;
const colors = [0x3137fd, 0xff0000, 0xffff00, 0x0000ff, 0x00ff00, 0x00ffff];

/**
 * A very low-poly butterfly - 4 triangles for wings, 12 for the body
 */
export class Butterfly {
  public readonly object: THREE.Group;
  private actions: THREE.AnimationAction[];
  private idleActions: THREE.AnimationAction[];
  private fluttering = false;

  constructor(size = 10) {
    const fullObject = new THREE.Group();
    this.object = fullObject;

    const leftWing = createWing(size);
    const rightWing = createWing(size);
    leftWing.translateX(size * 0.05);
    rightWing.translateX(-size * 0.05);
    leftWing.rotateZ(Math.atan2(0.05, 1));
    rightWing.rotateZ(Math.atan2(-0.05, 1));

    fullObject.add(leftWing, rightWing);

    const mixer = addMixer(fullObject);
    this.actions = [
      mixer.clipAction(createFlutterClip('left'), leftWing),
      mixer.clipAction(createFlutterClip('right'), rightWing),
    ];

    fullObject.add(createBody(size));

    fullObject.traverse((obj) => {
      obj.castShadow = true;
      obj.receiveShadow = true;
    });

    this.idleActions = [
      mixer.clipAction(createOpenCloseClip('left', -Math.atan2(0.05, 1)), leftWing),
      mixer.clipAction(createOpenCloseClip('right', -Math.atan2(0.05, 1)), rightWing),
    ];
  }

  startFluttering() {
    if (!this.fluttering) {
      for (const action of this.idleActions) {
        action.fadeOut(0.1);
      }

      this.fluttering = true;
      for (const action of this.actions) {
        action.reset();
        action.fadeIn(action.getClip().duration / 2);
        action.loop = THREE.LoopPingPong;
        action.enabled = true;
        action.play();
      }
    }
  }

  stopFluttering() {
    if (this.fluttering) {
      this.fluttering = false;
      for (const action of this.actions) {
        action.fadeOut(0.1);
      }
      for (const action of this.idleActions) {
        action.reset();
        action.loop = THREE.LoopRepeat;
        action.enabled = true;
        action.play();
      }
    }
  }

  setFluttering(fluttering: boolean) {
    if (fluttering) {
      this.startFluttering();
    } else {
      this.stopFluttering();
    }
  }
}

const _color = new THREE.Color();
function createWing(size: number) {
  // we'll need to have the color numbers like 0xccac90 split into arrays like [0xcc, 0xac, 0x90],
  const colorArrays = colors.map((num) => {
    _color.setHex(num, THREE.SRGBColorSpace);
    const { r, g, b } = _color;
    return [r, g, b];
  });

  // a wing: two triangles, folded up

  // two triangles, each has three points, each has three coordinates
  const points = 18;

  const vertices = new Float32Array(points);
  const vertexColors = new Float32Array(points);

  // points, x is always 0 because the wings are pointed up
  const body1 = [0, 0, size * 0.15];
  const body2 = [0, 0, size * 0.15];
  const front = [0, size, size / 2];
  const mid1 = [0, size * 0.8, -size * 0.25];
  const mid2 = [0, size * 0.75, -size * 0.25];
  const back = [0, size * 0.1, -size * 0.5];

  // triangles
  vertices.set(body1, 0);
  vertices.set(front, 3);
  vertices.set(mid1, 6);
  vertices.set(body2, 9);
  vertices.set(mid2, 12);
  vertices.set(back, 15);

  vertexColors.set(colorArrays[0]!, 0);
  vertexColors.set(colorArrays[1]!, 3);
  vertexColors.set(colorArrays[2]!, 6);
  vertexColors.set(colorArrays[3]!, 9);
  vertexColors.set(colorArrays[4]!, 12);
  vertexColors.set(colorArrays[5]!, 15);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(vertexColors, 3));

  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({
    vertexColors: true,
    shadowSide: THREE.DoubleSide,
    side: THREE.DoubleSide,
  });
  const retval = new THREE.Mesh(geometry, material);
  retval.receiveShadow = true;
  retval.castShadow = true;

  return retval;
}

function createBody(size: number) {
  // a body - one point, triangle, rotated triangle, one point, together 3+6+3 triangles?

  // twelve triangles, each has three points, each has three coordinates
  const points = 12 * 3 * 3;

  const vertices = new Float32Array(points);

  const r1 = size * 0.1;
  const r2 = size * 0.06;

  const frontTip = [0, 0, size * 0.35];
  const front1 = rotPoint(r1, 0, size * 0.2);
  const front2 = rotPoint(r1, 120, size * 0.2);
  const front3 = rotPoint(r1, -120, size * 0.2);
  const back1 = rotPoint(r2, 60, -size * 0.25);
  const back2 = rotPoint(r2, 180, -size * 0.25);
  const back3 = rotPoint(r2, -60, -size * 0.25);
  const backTip = [0, 0, -size * 0.35];

  // triangles
  vertices.set(frontTip, 0);
  vertices.set(front1, 3);
  vertices.set(front2, 6);
  vertices.set(frontTip, 9);
  vertices.set(front2, 12);
  vertices.set(front3, 15);
  vertices.set(frontTip, 18);
  vertices.set(front3, 21);
  vertices.set(front1, 24);

  vertices.set(front1, 27);
  vertices.set(back1, 30);
  vertices.set(front2, 33);
  vertices.set(front2, 36);
  vertices.set(back2, 39);
  vertices.set(front3, 42);
  vertices.set(front3, 45);
  vertices.set(back3, 48);
  vertices.set(front1, 51);

  vertices.set(front1, 54);
  vertices.set(back3, 57);
  vertices.set(back1, 60);
  vertices.set(front2, 63);
  vertices.set(back1, 66);
  vertices.set(back2, 69);
  vertices.set(front3, 72);
  vertices.set(back2, 75);
  vertices.set(back3, 78);

  vertices.set(back1, 81);
  vertices.set(back2, 84);
  vertices.set(backTip, 87);
  vertices.set(back2, 90);
  vertices.set(back3, 93);
  vertices.set(backTip, 96);
  vertices.set(back3, 99);
  vertices.set(back1, 102);
  vertices.set(backTip, 105);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({
    shadowSide: THREE.DoubleSide,
    side: THREE.DoubleSide,
    color: bodyColor,
  });

  const retval = new THREE.Mesh(geometry, material);
  retval.receiveShadow = true;
  retval.castShadow = true;

  return retval;
}

function rotPoint(r: number, aDeg: number, z: number): [number, number, number] {
  const a = (aDeg / 180) * Math.PI;
  return [r * Math.sin(a), r * Math.cos(a), z];
}

function createFlutterClip(side: 'left' | 'right') {
  const duration = 0.1;
  const a = 0.35;

  const durations = betweener(0, duration);
  const pies = betweener(0, side === 'right' ? Math.PI : -Math.PI);

  return new THREE.AnimationClip('flutter', duration, [
    new THREE.KeyframeTrack(
      '.rotation[z]',
      durations(0, 1),
      pies(0.5 - a, 0.5 + a),
      THREE.InterpolateSmooth,
    ),
  ]);
}

function createOpenCloseClip(side: 'left' | 'right', aClosed: number) {
  const duration = 5;
  const a = 0.45;

  const durations = betweener(0, duration);
  const dir = side === 'right' ? 1 : -1;
  const pies = betweener(dir * aClosed, dir * Math.PI);

  return new THREE.AnimationClip('openClose', duration, [
    new THREE.KeyframeTrack(
      '.rotation[z]',
      durations(0, 0.5, 0.55, 0.99, 1),
      pies(0, 0, a, a, 0),
      THREE.InterpolateLinear,
    ),
  ]);
}

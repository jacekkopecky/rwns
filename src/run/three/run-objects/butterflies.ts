import * as THREE from 'three';

import * as dim from '#dimensions';
import { randomItem } from '#utils';

import { objectsGroup } from '../../objects';
import { Circle, getObjectData } from '../../types';
import { Butterfly, GATE_POST_NAME, getHitBar } from '../models';
import { isDying } from '../resources';

import { isEndGate } from './gate';

const lift = dim.modelSizes.butterfly[0] * 2;
const liftingTime = 0.15;

interface ButterflyData {
  butterfly: Butterfly;
  lift: number;
  targetPosition?: THREE.Vector3;
  target?: THREE.Object3D;
  parked?: boolean; // will stick around even if the player walks past
}

export function createButterfly(): THREE.Object3D {
  const [w] = dim.modelSizes.butterfly;
  const butterfly = new Butterfly(w);
  const obj = butterfly.object;

  // extent radius is 0 because the butterfly will never be hit
  obj.userData.extent2d = new Circle(undefined, 0);

  obj.userData.type = 'object';
  obj.userData.butterfly = butterfly;

  return obj;
}

const _vector = new THREE.Vector3();
export function moveButterflies(butterflies: THREE.Object3D[], delta: number) {
  // for now expecting to only move one butterfly
  const butterfly = butterflies[0];
  if (!butterfly) return;

  const bData = getButterflyData(butterfly);

  if (bData.lift > 0) {
    const liftDelta = lift * (delta / liftingTime);
    butterfly.position.y += Math.min(bData.lift, liftDelta);
    bData.lift = Math.max(0, bData.lift - liftDelta);
  }

  if (bData.target && isDying(bData.target)) {
    delete bData.target;
    delete bData.targetPosition;
    selectNextButterflyTarget(butterfly);
  } else if (bData.targetPosition) {
    if (
      butterfly.position.x !== bData.targetPosition.x ||
      butterfly.position.z !== bData.targetPosition.z
    ) {
      _vector.copy(bData.targetPosition);
      _vector.sub(butterfly.position);
      const l = _vector.length();
      const deltaDist = dim.butterflySpeed * delta;
      if (l > deltaDist) _vector.multiplyScalar(deltaDist / l);
      butterfly.position.add(_vector);
      butterfly.rotation.y = Math.atan2(_vector.x, _vector.z);
    } else {
      // reached target position
      bData.butterfly.stopFluttering();
      delete bData.targetPosition;
      if (bData.target) {
        const hitBar = getHitBar(bData.target);
        if (hitBar) hitBar.position.y += dim.modelSizes.butterfly[0];
      } else {
        // we have just finished fluttering off the screen
        removeButterfly(butterfly, butterflies);
      }
    }
  } else if (butterfly.position.z + butterfly.parent!.position.z > 0 && !bData.parked) {
    selectNextButterflyTarget(butterfly);
  }
}

function getButterflyData(obj: THREE.Object3D): ButterflyData {
  if (obj.userData.objectSubtype !== 'butterfly') {
    throw new Error('butterfly expected');
  }

  return obj.userData as ButterflyData;
}

function sendButterflyToTree(
  butterfly: THREE.Object3D,
  tree?: THREE.Object3D,
  partName?: string,
  park?: boolean,
) {
  const bData = getButterflyData(butterfly);

  if (!tree) {
    delete bData.target;
    bData.targetPosition ??= new THREE.Vector3();
    bData.targetPosition.copy(butterfly.position);
    bData.targetPosition.x = Math.sign(butterfly.position.x) * dim.trackWidth * 2;
  } else {
    bData.target = tree;

    bData.targetPosition = new THREE.Vector3();
    const tData = getObjectData(tree);
    bData.targetPosition.set(
      tree.position.x,
      tData.height || butterfly.position.y,
      tree.position.z,
    );

    if (partName) {
      const parts = tree.getObjectsByProperty('name', partName);
      if (parts.length) {
        const selectedPart = randomItem(parts, Math.random);
        bData.targetPosition.add(selectedPart.position);
      }
    }
  }

  if (park) bData.parked = true;

  if (!(bData.lift > 0)) bData.lift = lift;
  bData.butterfly.startFluttering();
}

// move this elsewhere or move objectGroup to a parameter, or indeed a trees iterator, or a tree finder function, or use an exported tree finder function
function selectNextButterflyTarget(butterfly: THREE.Object3D) {
  const nextTree = objectsGroup.children.find(
    (o) =>
      o.userData.objectSubtype === 'tree' &&
      !isDying(o) &&
      o.position.z + o.parent!.position.z < -dim.initialPlayerBulletRange * 2,
  );

  if (nextTree) {
    sendButterflyToTree(butterfly, nextTree);
  } else {
    // go to an end gate's post instead
    const gate = objectsGroup.children.find((o) => isEndGate(o));
    sendButterflyToTree(butterfly, gate, GATE_POST_NAME, true);
  }
}

function removeButterfly(butterfly: THREE.Object3D, butterflies: THREE.Object3D[]) {
  const index = butterflies.indexOf(butterfly);
  if (index > -1) {
    butterflies.splice(index, 1);
  }
  butterfly.removeFromParent();
}

import * as THREE from 'three';

import * as dim from '#dimensions';
import type { ReadonlyState, UpgradablePermanentParameters } from '#types';

import { giveAward } from './awards';
import { createLevelObjects } from './levels';
import { getObjectData } from './types';

import { updateHitBar } from './three/models';
import { createObject, killObject } from './three/run-objects';
import { isDying } from './three/resources';
import { resetGroup, removeGroupChildrenBehindCamera } from './three/tools';

export const objectsGroup = new THREE.Group();

interface LevelInfo {
  msg: string;
  gemCount: number;
}

export function setupObjects(opts: {
  state: ReadonlyState;
  params: UpgradablePermanentParameters;
  onFinish: () => void;
}): LevelInfo {
  resetGroup(objectsGroup);

  objectsGroup.position.z = -dim.startDistance;

  const { objects, customMessage = '', gemCount = 0 } = createLevelObjects(opts.state, opts.params);

  for (const obj of objects) {
    const oData = getObjectData(obj);
    oData.maxHitPoints = oData.hitPoints;
    obj.userData.maxZ = obj.position.z + oData.extent2d.max.y;
  }

  objects.sort(compareByMaxZ);

  const endGate = createObject('gate', 'end', opts.onFinish);
  endGate.userData.maxZ = objects.at(-1)!.userData.maxZ - dim.endDistance;
  endGate.translateZ(endGate.userData.maxZ);
  getObjectData(endGate).hitPoints = Infinity; // make the gate swallow bullets
  objects.push(endGate);

  for (const obj of objects) {
    objectsGroup.add(obj);
  }

  return {
    msg: customMessage ?? '',
    gemCount: gemCount ?? 0,
  };
}

// order by maxZ from largest to smallest
function compareByMaxZ(a: THREE.Object3D, b: THREE.Object3D) {
  return b.userData.maxZ - a.userData.maxZ;
}

export function moveObjects(delta: number) {
  const deltaZ = dim.playerSpeedPerSecond * delta;
  objectsGroup.position.z += deltaZ;

  removeGroupChildrenBehindCamera(objectsGroup);
}

export function hitObject(obj: THREE.Object3D, hitPoints: number, playerHit = false): boolean {
  if (isDying(obj)) return false;

  const oData = getObjectData(obj);

  // cannot shoot a collectible
  if (!playerHit && oData.collectible) return false;

  // cannot harm a benign object with a player
  if (!(playerHit && oData.benign)) {
    oData.hitPoints -= hitPoints;
  }

  if (oData.maxHitPoints && oData.hitPoints < oData.maxHitPoints) {
    updateHitBar(obj, oData.hitPoints / oData.maxHitPoints);
  }

  if (
    oData.collectible ||
    oData.hitPoints <= 0 ||
    (oData.benign && playerHit && oData.hitPoints !== Infinity)
  ) {
    const givingAward = oData.award && !(oData.benign && playerHit);
    killObject(obj, givingAward);

    // give the award, but not from benign objects when we walk into them
    if (givingAward) giveAward(obj, oData);
  }

  return true;
}

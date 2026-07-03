import * as THREE from 'three';

import * as dim from '#dimensions';

import { bulletsGroup } from './bullets';
import { objectsGroup } from './objects';
import { playersGroup } from './players';
import { isDying } from './three/resources';
import { removeGroupChildrenBehindCamera, resetGroup } from './three/tools';

export const dyingGroup = new THREE.Group();

export function setupDyingGroup() {
  resetGroup(dyingGroup);
}

export function moveAndSweepDyingGroup(delta: number) {
  const deltaZ = dim.playerSpeedPerSecond * delta;
  dyingGroup.position.z += deltaZ;

  removeGroupChildrenBehindCamera(dyingGroup, false);

  // move dying objects into a separate group so we don't have to deal with them afterwards
  // first gather the objects so we don't remove them while going through the collections
  const dyingStuff = [
    ...Iterator.from(objectsGroup.children).filter((obj) => isDying(obj)),
    ...Iterator.from(playersGroup.children).filter((obj) => isDying(obj)),
    ...Iterator.from(bulletsGroup.children).filter((obj) => isDying(obj)),
  ];

  for (const obj of dyingStuff) {
    obj.position.add(obj.parent!.position);
    dyingGroup.add(obj);
    obj.position.sub(dyingGroup.position);
  }
}

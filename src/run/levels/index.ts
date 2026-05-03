import * as THREE from 'three';

import type { ReadonlyState } from '#types';

import { firstLevels } from './first-levels';

export type LevelFunction = (state: ReadonlyState) => {
  objects: THREE.Object3D[];
  customMessage?: string;
};

export function createLevelObjects(state: ReadonlyState) {
  if (state.level < firstLevels.length) {
    return firstLevels[state.level]!(state);
  }

  throw new Error(`no function to make level ${state.level}`);
}

// const otherGate = createObject('gate', 'other', () => {});
// otherGate.userData.maxZ = -dim.trackLength / 4;
// otherGate.translateZ(otherGate.userData.maxZ);
// getObjectData(otherGate).collectible = true;
// objects.push(otherGate);

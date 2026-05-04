import * as THREE from 'three';

import type { ReadonlyState } from '#types';

import { firstLevels } from './levels-123';

export type LevelFunction = (state: ReadonlyState) => {
  objects: THREE.Object3D[];
  customMessage?: string;
};

export function createLevelObjects(state: ReadonlyState): ReturnType<LevelFunction> {
  try {
    if (state.level < firstLevels.length) {
      return firstLevels[state.level]!(state);
    }

    throw new Error('run out of levels');
  } catch (e) {
    console.error(`error making a level`, e);

    // use first level as a fallback
    return { ...firstLevels[0]!(state), customMessage: 'unexpected intermission' };
  }
}

// const otherGate = createObject('gate', 'other', () => {});
// otherGate.userData.maxZ = -dim.trackLength / 4;
// otherGate.translateZ(otherGate.userData.maxZ);
// getObjectData(otherGate).collectible = true;
// objects.push(otherGate);

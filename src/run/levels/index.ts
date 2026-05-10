import * as THREE from 'three';

import type { ReadonlyState, UpgradablePermanentParameters } from '#types';

import { firstLevels } from './levels-123';
import { level4Plus } from './levels-4-xx';

export type LevelFunction = (
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
) => {
  objects: THREE.Object3D[];
  customMessage?: string;
  gemCount?: number;
};

export function createLevelObjects(
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
): ReturnType<LevelFunction> {
  try {
    if (state.level < firstLevels.length) {
      return firstLevels[state.level]!(state, params);
    }

    return level4Plus(state, params);
  } catch (e) {
    console.error(`error making a level`, e);

    // use first level as a fallback
    return { ...firstLevels[0]!(state, params), customMessage: 'unexpected intermission' };
  }
}

// const otherGate = createObject('gate', 'other', () => {});
// otherGate.userData.maxZ = -dim.trackLength / 4;
// otherGate.translateZ(otherGate.userData.maxZ);
// getObjectData(otherGate).collectible = true;
// objects.push(otherGate);

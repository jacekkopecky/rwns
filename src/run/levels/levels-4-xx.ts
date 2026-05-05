import * as dim from '#dimensions';
import type { ReadonlyState } from '#types';
import { removeRandomItem, spacedRandomIndexes } from '#utils';

import type { LevelFunction } from './index';
import { makeBag, makeEndBlocks, makeTrees } from './tools';

export const MIN = 4;
export const MAX = Infinity;

export function level4Plus(state: ReadonlyState): ReturnType<LevelFunction> {
  const hardness = dim.difficultyIncreasePerLevel ** (state.level - MIN + 1);

  const currObjectHP = dim.objectHitPoints * hardness;

  const customMessage = state.level === MIN ? 'from now on\nit gets harder' : '';

  const objects = makeTrees(
    dim.runLength,
    dim.treesPerTreeWidth,
    currObjectHP,
    dim.objectHitPoints,
  );

  const amounts = [1, 2, 3, 1, 2, 3, 1, 2, 3, 2];
  const bags = amounts.length;
  const treeIndexesToReplace = spacedRandomIndexes(objects, bags);

  for (const i of treeIndexesToReplace) {
    const tree = objects[i]!;
    const bag = makeBag(removeRandomItem(amounts));
    objects[i] = bag;
    bag.position.add(tree.position);
  }

  const blockStart =
    objects.at(-1)!.position.z - dim.modelSizes.boulder[0] - dim.modelSizes.conifer[0];

  const blocks = makeEndBlocks(
    blockStart,
    8,
    dim.maxEndBlockHitPoints * hardness,
    currObjectHP / 2,
  );

  return { objects: objects.concat(blocks), customMessage };
}

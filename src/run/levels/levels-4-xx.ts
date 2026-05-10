import * as dim from '#dimensions';
import type { ReadonlyState } from '#types';
import { range, removeRandomItem, spacedRandomIndexes } from '#utils';

import type { LevelFunction } from './index';
import { makeBag, makeEndBlocks, makeGem, makeTrees } from './tools';

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

  const amounts = [...gemsWithIds(2, 'tree'), ...coinBagAmounts(10, 20)];
  const bags = amounts.length;
  const treeIndexesToReplace = spacedRandomIndexes(objects, bags);
  let gemCount = 0;

  for (const i of treeIndexesToReplace) {
    const tree = objects[i]!;
    const item = removeRandomItem(amounts);

    let object = null;

    if (item.type === 'gem') {
      // create every gem so we use the same random() calls, but don't put in the ones already collected
      const gem = makeGem(dim.gemHitPoints * hardness, item.id);
      if (!state.collectedGemIds.includes(item.id)) {
        object = gem;
        gemCount += 1;
      }
    } else if (item.type === 'bag') {
      object = makeBag(item.amount);
    } else {
      throw new Error(`unhandled item ${JSON.stringify(item)}`);
    }

    if (object) {
      objects[i] = object;
      object.position.add(tree.position);
    }
  }

  const blockStart =
    objects.at(-1)!.position.z - dim.modelSizes.boulder[0] - dim.modelSizes.conifer[0];

  const blocks = makeEndBlocks(
    blockStart,
    8,
    dim.maxEndBlockHitPoints * hardness,
    currObjectHP / 2,
  );

  return { objects: objects.concat(blocks), customMessage, gemCount };
}

function gemsWithIds(n: number, idPrefix = ''): Iterable<{ type: 'gem'; id: string }> {
  return range(n).map((x) => ({ type: 'gem', id: `gem_${idPrefix}${x}` }));
}

function coinBagAmounts(bags: number, total: number): { type: 'bag'; amount: number }[] {
  if (total <= bags) {
    return Array(total).fill({ type: 'bag', amount: 1 });
  }

  const amounts = Array(bags);

  // fill the array with average ints
  let remaining = total;
  for (let i = 0; i < bags; i += 1) {
    const val = Math.round(remaining / (bags - i));
    amounts[i] = val;
    remaining -= val;
  }

  // spread the values
  const avg = total / bags;
  const spread = Math.round(avg * 0.26);
  if (spread >= 1) {
    const stepLength = bags / (spread + 0.5);
    // console.log({ stepLength });
    for (let i = 0; i < bags - 1; i += 2) {
      const currSpread = spread - Math.floor((i + 1) / stepLength);
      // console.log({ currSpread });
      amounts[i] -= currSpread;
      amounts[i + 1] += currSpread;
    }
  }

  return amounts.map((amount) => ({ type: 'bag', amount }));
}

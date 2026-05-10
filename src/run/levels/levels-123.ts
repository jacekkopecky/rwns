import * as dim from '#dimensions';
import type { UpgradablePermanentParameters } from '#types';
import { removeRandomItem, spacedRandomIndexes } from '#utils';

import type { LevelFunction } from './index';
import { makeBag, makeEndBlocks, makeTrees } from './tools';

export const firstLevels: LevelFunction[] =
  // repeat first because the first one is the never used zeroth level
  [first, first, second, third];

function first(_: unknown, params: UpgradablePermanentParameters) {
  // just trees, one hit point each
  return {
    objects: makeTrees(dim.runLength, dim.treesPerTreeWidth, params.playerBulletHitPoints),
    customMessage: `don't run into trees`,
  };
}

function second(_: unknown, params: UpgradablePermanentParameters) {
  // same as furst but with 10 bags with up to 3 coins (avg 2)

  const { objects } = first(_, params);

  const amounts = [1, 2, 3, 1, 2, 3, 1, 2, 3, 2];
  const bags = amounts.length;
  const treeIndexesToReplace = spacedRandomIndexes(objects, bags);

  for (const i of treeIndexesToReplace) {
    const tree = objects[i]!;
    const bag = makeBag(removeRandomItem(amounts));
    objects[i] = bag;
    bag.position.add(tree.position);
  }

  return { objects, customMessage: 'find and collect coins' };
}

function third(_: unknown, params: UpgradablePermanentParameters) {
  // same as second but with end blocks
  const { objects } = second(_, params);
  const customMessage = 'some things take more than one bullet';

  const blockStart =
    objects.at(-1)!.position.z - dim.modelSizes.boulder[0] - dim.modelSizes.conifer[0];

  // make endBlocks that are definitely possible to beat
  const blocks = makeEndBlocks(blockStart, 4, 3, 1);

  return { objects: objects.concat(blocks), customMessage };
}

import * as dim from '#dimensions';
import { removeRandomItem, spacedRandomIndexes } from '#utils';

import { createObject } from '../three/run-objects';
import { getObjectData } from '../types';

import type { LevelFunction } from '.';
import { makeBag, makeTrees } from './tools';

export const firstLevels: LevelFunction[] =
  // repeat first because the first one is the never used zeroth level
  [first, first, second, third];

function first() {
  // just trees, one hit point each
  return {
    objects: makeTrees(dim.runLength, dim.treesPerTreeWidth, dim.playerBulletHitPoints),
    customMessage: `don't run into trees`,
  };
}

function second() {
  // trees and 10 bags with up to 3 coins (avg 2)

  const amounts = [1, 2, 3, 1, 2, 3, 1, 2, 3, 2];
  const bags = amounts.length;

  const objects = makeTrees(dim.runLength, dim.treesPerTreeWidth, dim.playerBulletHitPoints);
  const treeIndexesToReplace = spacedRandomIndexes(objects, bags);

  for (const i of treeIndexesToReplace) {
    const tree = objects[i]!;
    const bag = makeBag(removeRandomItem(amounts));
    objects[i] = bag;
    bag.position.add(tree.position);
  }

  return { objects, customMessage: 'find and collect coins' };
}

function third() {
  // same as second but with end blocks
  const { objects } = second();
  const customMessage = 'some things take more than one bullet';

  const blockRows = 4;
  const blockStart =
    objects.at(-1)!.position.z - dim.modelSizes.boulder[0] - dim.modelSizes.conifer[0];
  const blockWidth = dim.trackWidth / dim.bouldersPerEndRow;

  for (let i = 0; i < blockRows; i += 1) {
    for (let j = 0; j < dim.bouldersPerEndRow; j += 1) {
      const block = createObject('endBlock', i / (blockRows - 1));
      block.position.x = j * blockWidth + blockWidth / 2 - dim.trackWidth / 2;
      block.position.z = blockStart - (i + 1) * blockWidth * 1.5;

      const oData = getObjectData(block);
      oData.hitPoints = i + 1;

      objects.push(block);
    }
  }

  return { objects, customMessage };
}

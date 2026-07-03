import type * as THREE from 'three';

import * as dim from '#dimensions';
import type { ReadonlyState, UpgradablePermanentParameters } from '#types';
import { nextId, random, range, removeRandomItem, spacedRandomIndexes } from '#utils';

import { isFeatureAllowed } from '../../state';
import { getHitBar } from '../three/models';
import { getObjectData } from '../types';

import type { LevelFunction } from './index';
import { LEVEL_MESSAGES } from './level-messages';
import { makeBag, makeEndBlocks, makeGem, makeTrees } from './tools';

const MIN = 4;

export function level4Plus(
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
): ReturnType<LevelFunction> {
  const hardness = dim.difficultyIncreasePerLevel ** (state.level - MIN + 1);

  const currObjectHP = params.objectHitPoints * hardness;

  const customMessage = LEVEL_MESSAGES[state.level] ?? '';

  const objects = makeTrees(
    dim.runLength,
    dim.treesPerTreeWidth,
    currObjectHP,
    params.objectHitPoints,
  );

  const gemCount = isFeatureAllowed('gems', state) ? params.gemsPerLevel : 0;
  const gemsInRun = Math.round(gemCount / 2);
  const gemsInBlocks = gemCount - gemsInRun;

  const extraItems: ExtraObjectInfo[] = coinBagAmounts(dim.maxCoinBagsPerRun, params.coinsPerLevel);
  const runGems = [...gemsWithIds(gemsInRun, 'tree')];
  extraItems.push(...runGems);

  ensureGuaranteedGems(runGems, state, params);

  const treeIndexesToReplace = spacedRandomIndexes(objects, extraItems.length);
  let actualGemCount = 0;

  for (const i of treeIndexesToReplace) {
    const tree = objects[i]!;
    const item = removeRandomItem(extraItems);

    let object = null;

    switch (item.type) {
      case 'gem': {
        // create every gem so we use the same random() calls, but don't put in the ones already collected
        const gem = makeGem(params.gemHitPoints * hardness, item.id);
        if (!item.id || !state.collectedGemIds.includes(item.id)) {
          object = gem;
          actualGemCount += 1;
        }
        break;
      }
      case 'bag':
        object = makeBag(item.amount);
        break;
      default:
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
    dim.normalLevelEndBlockRows,
    params.maxEndBlockHitPoints * hardness,
    currObjectHP / 2,
    params.endBlockCoinsPerLevel,
  );

  const extraGemsInBlocks = [...gemsWithIds(gemsInBlocks, 'block')];
  const blockIndexesToAddGemsTo = spacedRandomIndexes(blocks, extraGemsInBlocks.length);
  for (const i of blockIndexesToAddGemsTo) {
    const gemInfo = extraGemsInBlocks.pop()!;
    if (addGemToEndBlock(gemInfo, blocks[i]!, state)) actualGemCount += 1;
  }

  return { objects: objects.concat(blocks), customMessage, gemCount: actualGemCount };
}

interface GemInfo {
  type: 'gem';
  id: string | undefined;
}
interface BagInfo {
  type: 'bag';
  amount: number;
}
type ExtraObjectInfo = GemInfo | BagInfo;

// if we don't have enough gems for the guaranteed number,
// make some anonymous (take their IDs away) so they appear again
function ensureGuaranteedGems(
  runGems: GemInfo[],
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
) {
  const gemsCollected = runGems.filter((g) => g.id && state.collectedGemIds.includes(g.id));
  const gemsAvailableInRun = runGems.length - gemsCollected.length;
  if (params.gemsGuaranteedPerRun > gemsAvailableInRun) {
    gemsCollected
      .values()
      .take(params.gemsGuaranteedPerRun - gemsAvailableInRun)
      .forEach((g) => (g.id = undefined));
  }
}

function gemsWithIds(n: number, idPrefix = ''): Iterable<GemInfo> {
  return range(n).map((x) => ({
    type: 'gem',
    id: `gem_${idPrefix}${x}`,
  }));
}

function coinBagAmounts(bags: number, total: number): BagInfo[] {
  if (total <= bags) {
    return Array<BagInfo>(total).fill({ type: 'bag', amount: 1 });
  }

  const amounts = new Array<number>(bags);

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
    for (let i = 0; i < bags - 1; i += 2) {
      const currSpread = spread - Math.floor((i + 1) / stepLength);
      amounts[i]! -= currSpread;
      amounts[i + 1]! += currSpread;
    }
  }

  return amounts.map((amount) => ({ type: 'bag', amount }));
}

function addGemToEndBlock(gemInfo: GemInfo, block: THREE.Object3D, state: ReadonlyState): boolean {
  const gem = makeGem(0, gemInfo.id, true);

  // rotate the gem randomly
  // compute the angles outside of the condition below so we always use the same randoms
  const yRotation = Math.PI * 2 * random();
  const zRotation = Math.PI * (random() * 0.05 + 0.05);

  if (!gemInfo.id || !state.collectedGemIds.includes(gemInfo.id)) {
    // shift the gem to the top of the boulder
    gem.position.y = dim.modelSizes.boulder[1] - dim.modelSizes.gem[1] * 0.3;

    // shift hitBar higher
    const hitBar = getHitBar(block);
    if (hitBar) hitBar.position.y += dim.modelSizes.gem[1] * 0.3;

    gem.name = gemInfo.id ?? nextId();
    gem.castShadow = false;

    gem.rotation.y = yRotation;
    gem.rotation.z = zRotation;
    block.add(gem);

    const oData = getObjectData(block);
    oData.awards ??= [];
    // the gem goes in as the first award so it flies out nicely
    oData.awards.unshift({
      amount: 1,
      type: 'gem',
      useForAward: gem.name,
    });

    return true;
  } else {
    return false;
  }
}

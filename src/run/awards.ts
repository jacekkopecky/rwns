import * as THREE from 'three';

import * as dim from '../dimensions';
import { type Currency } from '../types';
import { formatCurrencyNumber } from '../utils';
import { Wallet } from '../wallet';
import { getScreenCoordinates } from '../three';
import { createObject } from '../three-resources';

import { flyToTargetAndShrink } from './utils/animations';

const el = {
  endRunScreen: document.querySelector('#endRunScreen')!,
  endRunScreenCoins: document.querySelector('#endRunScreen .value.coin')!,
  endRunScreenGems: document.querySelector('#endRunScreen .value.gem')!,
};

// `wallet` is authoritative for end run purposes
// delayed wallet lets us show incoming awards as the flying coins arrive
// where it doesn't really matter if we lose events or get interrupted before they arrive
let wallet = new Wallet();
let delayedWallet = new Wallet();

export const awardsGroup = new THREE.Group();

export function setupAwards() {
  wallet.reset();
  delayedWallet.reset();
  awardsGroup.clear();
  toggleEndRunScreen(false);
}

export async function giveAward({ type, amount }: Currency, fromObj: THREE.Object3D) {
  wallet.add(type, amount);

  const targetCoords = getScreenCoordinates(
    dim.runAwardsTargetDepth,
    ...dim.runAwardsTargetCoordinates,
  );

  const position = new THREE.Vector3();
  fromObj.getWorldPosition(position);

  const subAwards = splitAward(amount);
  let first = true;
  for (const subAmount of subAwards) {
    if (!first) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    first = false;

    const obj = createObject(type);
    obj.position.copy(position);
    if (!first) {
      obj.position.x += (Math.random() - 0.5) * dim.sizes.defaultSize![0];
    }
    flyToTargetAndShrink(obj, targetCoords, dim.runAwardsFlyTime);
    awardsGroup.add(obj);

    obj.addEventListener('removed', () => {
      delayedWallet.add(type, subAmount);
    });
  }
}

/**
 * If we're awarding more than 1 of something, we can show that in several flying coins, but not too many.
 */
function splitAward(n: number): number[] {
  if (n <= 1) return [n];
  if (n <= 2) return [n / 2, n / 2];
  if (n <= 3) return [n / 3, n / 3, n / 3];

  const len = Math.floor(Math.min(Math.log(n) + 3, 7));
  const retval = new Array(len);
  let remaining = n;
  for (let i = 0; i < len; i += 1) {
    const thisStep = Math.round(remaining / (len - i));
    retval[i] = thisStep;
    remaining -= thisStep;
  }
  return retval;
}

export function updateAwardsView() {
  // todo update in-run awards view
  // this is called on animation frame so remember what we show, see how much we have, make sure all
  // is shown within 200ms? with slowing down...
}

export function toggleEndRunScreen(value?: boolean) {
  el.endRunScreen.classList.toggle('visible', value);
}

export function updateEndRunScreen() {
  el.endRunScreenCoins.textContent = formatCurrencyNumber(wallet.read('coin'));
  el.endRunScreenGems.textContent = formatCurrencyNumber(wallet.read('gem'));
}

import * as THREE from 'three';

import * as dim from '#dimensions';
import { type CurrencyType, Wallet } from '#types';
import { fillOrHide, random } from '#utils';

import * as state from '../state';

import { flyToTarget } from './three/animations';
import { getScreenCoordinates } from './three/camera';
import { createSpriteObject } from './three/resources';
import { type ObjectData } from './types';
import { AnimatedCount } from './utils/animated-count';

const el = {
  endRunScreen: document.querySelector('#endRunScreen')!,
  endRunScreenCoins: document.querySelector('#endRunScreen .coin')!,
  endRunScreenGems: document.querySelector('#endRunScreen .gem')!,
  endRunScreenGemCount: document.querySelector<HTMLElement>('#endRunScreen .gemCount')!,
  inRunContainer: document.querySelector('#inRunWallet')!,
  inRun: {
    gem: document.querySelector('#inRunWallet .gem')!,
    coin: document.querySelector('#inRunWallet .coin')!,
  },
};

const wallet = new Wallet();
const awardsShowing = new Map<CurrencyType, AnimatedCount>();

export const awardsGroup = new THREE.Group();

export function setupAwards() {
  awardsGroup.clear();
  wallet.reset();
  awardsShowing.clear();
  toggleEndRunScreen(false);
  for (const walletEl of Object.values(el.inRun)) {
    fillOrHide(walletEl, 0);
  }
  el.inRunContainer.classList.add('hidden');
}

export async function giveAward(fromObj: THREE.Object3D, oData: ObjectData) {
  if (!oData.award) return;

  const { type, amount } = oData.award;

  wallet.add(type, amount);
  state.addAward(oData.award);

  const targetCoords = getScreenCoordinates(
    dim.cameraToTrackEndLength,
    ...dim.runAwardsTargetCoordinates,
  );

  const [obj, position] = makeAwardObject(type, oData.useForAward, fromObj);

  const subAwards = splitAward(amount);
  let first = true;
  for (const subAmount of subAwards) {
    if (!first) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const subObj = first ? obj : obj.clone();
    if (!first) {
      subObj.position.copy(position);
      // use obj…extent2d because clone() doesn't keep the objects in userData
      subObj.position.x += (random() - 0.5) * obj.userData.extent2d.max.x;
    }

    awardsGroup.attach(subObj);
    flyToTarget(subObj, targetCoords, dim.runAwardsFlyDuration);

    subObj.addEventListener('removed', () => {
      addToShow(type, subAmount);
    });

    first = false;
  }
}

/**
 * If the object is marked as used for the award, return that object (or the marked subobject),
 * otherwise create a new sprite for the animation. Also, return the world position of the object.
 */
function makeAwardObject(
  type: CurrencyType,
  useForAward: ObjectData['useForAward'],
  fromObj: THREE.Object3D,
): [obj: THREE.Object3D, position: THREE.Vector3] {
  const position = new THREE.Vector3();
  let obj;

  if (typeof useForAward === 'string') {
    obj = fromObj.getObjectByName(useForAward);
  } else if (useForAward) {
    obj = fromObj;
  }

  if (obj) {
    obj.getWorldPosition(position);
  } else {
    fromObj.getWorldPosition(position);
    obj = createSpriteObject(type);
    obj.position.copy(position);
  }
  return [obj, position];
}

function addToShow(type: CurrencyType, amount: number) {
  const countup = awardsShowing.getOrInsertComputed(
    type,
    () => new AnimatedCount(dim.countupMaxTime),
  );
  countup.add(amount);
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

export function updateAwardsView(delta: number) {
  for (const [currencyType, countup] of awardsShowing.entries()) {
    const walletEl = el.inRun[currencyType];
    const showing = countup.updateShowing(delta);
    fillOrHide(walletEl, showing);
    if (showing) {
      el.inRunContainer.classList.remove('hidden');
    }
  }
}

export function toggleEndRunScreen(visible?: boolean, win?: boolean) {
  el.endRunScreen.classList.toggle('visible', visible);
  if (visible) {
    el.endRunScreen.classList.toggle('win', win);
  }
}

export function handleRetryButton() {
  if (el.endRunScreen.classList.contains('visible') && el.endRunScreen.classList.contains('win')) {
    state.retryLevel();
  }
}

export function updateEndRunScreen() {
  let showingAny = false;
  showingAny = fillOrHide(el.endRunScreenCoins, wallet.read('coin')) || showingAny;
  showingAny = fillOrHide(el.endRunScreenGems, wallet.read('gem')) || showingAny;

  // update gemCount here from what's stored in the dataset
  const gemCount = el.endRunScreenGemCount.dataset.gemCount ?? '';
  el.endRunScreen.classList.toggle('gotGems', Boolean(gemCount));
  showingAny = fillOrHide(el.endRunScreenGemCount, gemCount) || showingAny;

  el.endRunScreen.classList.toggle('collected', showingAny);
}

export function updateEndRunScreenGemCount(count: number) {
  // we can't put the count in the end screen yet because this is called when a new level is prepared,
  // which is also when we press a button on the end run screen that stays visible for a bit
  el.endRunScreenGemCount.dataset.gemCount = count ? String(count) : '';
}

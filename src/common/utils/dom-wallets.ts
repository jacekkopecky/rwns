import * as dim from '#dimensions';
import type { ReadonlyWallet } from '#types';

import { AnimatedCount } from './animated-count';
import { fillOrHide } from './dom';

export function fillWalletEls<T extends string>(
  wallet: ReadonlyWallet<T>,
  els: Record<T, HTMLElement>,
) {
  for (const type of wallet.currencies) {
    const el = els[type];
    if (animations.has(el)) continue;
    fillOrHide(el, wallet.read(type));
  }
}

const animationRateMs = 50;
const animations = new Map<HTMLElement, AnimatedCount>();
let animationLoopRunning = false;
let lastAnimationTime = 0;

function walletAnimationLoop() {
  if (animations.size === 0) {
    animationLoopRunning = false;
    lastAnimationTime = 0;
    return;
  }

  const time = Date.now();
  const delta = lastAnimationTime ? (time - lastAnimationTime) / 1000 : 0;
  lastAnimationTime = time;

  for (const [el, count] of animations.entries()) {
    const showing = count.updateShowing(delta);
    fillOrHide(el, showing);
  }

  setTimeout(walletAnimationLoop, animationRateMs);
}

export function animateValue(el: HTMLElement, start: number, target: number) {
  const count = animations.getOrInsertComputed(
    el,
    () =>
      new AnimatedCount(start, dim.countAnimationTime, () => {
        animations.delete(el);
      }),
  );

  count.setTarget(target);

  if (!animationLoopRunning) {
    animationLoopRunning = true;
    walletAnimationLoop();
  }
}

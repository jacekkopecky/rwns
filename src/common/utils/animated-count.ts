import * as dim from '#dimensions';

import { fillOrHide } from './dom';

/**
 * This class is an animated count to the target amount, where the animation takes at most
 * `countTime` seconds.
 *
 * Call `add(amount)` to add a number to the target amount, this resets the timer.
 *
 * Call `updateShowing(delta)` in your animation loop to get the current showing number.
 */
export class AnimatedCount {
  private remainingTime: number;
  private showing: number;
  private target: number;
  private wasMoving = false;

  constructor(
    startingValue: number,
    private countTime: number,
    public onFinish?: () => void,
  ) {
    this.remainingTime = countTime;
    this.showing = startingValue;
    this.target = startingValue;
  }

  add = (amount: number) => {
    this.setTarget(this.target + amount);
  };

  setTarget = (target: number) => {
    this.target = target;
    this.remainingTime = this.countTime;
  };

  updateShowing = (delta: number): number => {
    if (this.showing === this.target || delta >= this.remainingTime) {
      this.showing = this.target;
      this.remainingTime = 0;
      if (this.wasMoving) {
        this.onFinish?.();
        this.wasMoving = false;
      }
    } else {
      const sign = Math.sign(this.target - this.showing);
      const amount = Math.abs(this.target - this.showing);
      const deltaFraction = delta / this.remainingTime;

      // the following gives us linearly decreasing amounts to take
      // if we use evenly spaced parts of remaining time
      const taking = Math.floor(amount * (2 - deltaFraction) * deltaFraction);

      // clamp taking to at least one but at most the remaining amount
      const clamped = Math.min(Math.max(1, taking), amount);

      this.showing += clamped * sign;
      this.remainingTime -= delta;
      this.wasMoving = true;
    }
    return this.showing;
  };
}

const animationRateMs = 50;
const animations = new Map<HTMLElement, AnimatedCount>();
let animationLoopRunning = false;
let lastAnimationTime = 0;

function countAnimationLoop() {
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

  setTimeout(countAnimationLoop, animationRateMs);
}

interface TestingWindow {
  mockAnimateValue?: (el: HTMLElement, start: number, target: number) => void;
}

export function animateValue(el: HTMLElement, start: number, target: number) {
  // support testing mock overrides
  const testWindow = window as unknown as TestingWindow;
  if (typeof window !== 'undefined' && testWindow.mockAnimateValue) {
    testWindow.mockAnimateValue(el, start, target);
    return;
  }

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
    countAnimationLoop();
  }
}

export function isValueAnimating(el: HTMLElement) {
  return animations.has(el);
}

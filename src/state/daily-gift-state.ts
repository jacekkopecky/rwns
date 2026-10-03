import type { ReadonlyState } from '#types';
import { getToday } from '#utils';

import { isFeatureAllowed } from './features';
import { _state, getUpgradablePermanentParameters } from './state';
import { saveState } from './storage';

export function getDailyGiftMaxCoinsPerCurrentRun() {
  // put together coins in run plus one column of end blocks
  // technically, a strong-enough player can kill more end blocks and get more than this

  const params = getUpgradablePermanentParameters();
  return params.coinsPerLevel + params.endBlockCoinsPerLevel;
}

export function getCountOfAllCards(state: ReadonlyState) {
  return Object.values(state.cards.readAll()).reduce((a, b) => a + b, 0);
}

export function canGiveDailyGift(state: ReadonlyState) {
  const today = getToday();
  return isFeatureAllowed('dailyGift', state) && state.lastDailyGiftGiven !== today;
}

export function setDailyGiftGivenToday() {
  const today = getToday();
  _state.lastDailyGiftGiven = today;
  saveState();
}

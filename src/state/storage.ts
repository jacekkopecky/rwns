import { CARDS, CURRENCIES, parseUpgrades, Wallet, type State } from '#types';
import { getToday, parseNumber, parseString, parseStringArray } from '#utils';

import { _state } from './state';

// we have to get it on every use so that tests can give us a different one
function getLocalStorageKey() {
  return window.RWNS_LOCAL_STORAGE_KEY || 'rwns-game-state';
}

export function saveState() {
  localStorage.setItem(getLocalStorageKey(), JSON.stringify(_state));
}

export function loadState(): State | null {
  const dataString = localStorage.getItem(getLocalStorageKey());

  if (!dataString) {
    return null;
  }

  try {
    const data = JSON.parse(dataString) as Record<string, unknown>;

    return {
      level: parseNumber(data.level, 1),
      energy: parseNumber(data.energy, Infinity),
      wallet: new Wallet(CURRENCIES, data.wallet),
      cards: new Wallet(CARDS, data.cards),
      runUpgradeLevels: parseUpgrades(data.runUpgradeLevels),
      collectedGemIds: parseStringArray(data.collectedGemIds),
      played: parseNumber(data.played, 0),
      lastEnergyGiven: parseNumber(data.lastEnergyGiven, Date.now()),
      lastDailyGiftGiven: parseString(data.lastDailyGiftGiven, getToday()),
      startDate: parseString(data.startDate, getToday()),
    } satisfies Required<State>;
  } catch (e) {
    const newKey = getLocalStorageKey() + new Date().toISOString();
    localStorage.setItem(newKey, dataString);
    console.warn(`cannot read state, saving in "${newKey}"`, e);
    return null;
  }
}

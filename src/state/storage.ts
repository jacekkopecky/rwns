import { CARDS, CURRENCIES, Wallet, type State } from '#types';
import { parseNumber, parseString, parseStringArray } from '#utils';

import { parseUpgrades } from '../main-screen';

import { _state } from './state';

const LOCAL_STORAGE_KEY = 'rwns-game-state';

export function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(_state));
}

export function loadState(): State | null {
  const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);

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
      lastDailyGiftGiven: parseString(data.lastDailyGiftGiven, ''),
    } satisfies Required<State>;
  } catch (e) {
    const newKey = LOCAL_STORAGE_KEY + new Date().toISOString();
    localStorage.setItem(newKey, dataString);
    console.warn(`cannot read state, saving in "${newKey}"`, e);
    return null;
  }
}

import * as dim from '#dimensions';
import { Wallet, type Currency, type CurrencyType, type ReadonlyState, type State } from '#types';

import { parseUpgrades, type Upgrade, type UpgradeBag, type UpgradeType } from './upgrades';

const LOCAL_STORAGE_KEY = 'jacekkopecky-shoot-em-state';

function createInitialState(): State {
  const currentLevelUpgrades: UpgradeBag = {};
  return {
    wallet: new Wallet(),
    level: 1,
    played: 0,
    energy: Infinity,
    lastEnergyGiven: Date.now(),
    currentLevelUpgrades,
  };
}

let state = createInitialState();

export function initState() {
  loadState();
  (window as any).gameState = state;
}

export function resetState() {
  state = createInitialState();
  (window as any).gameState = state;
  saveState();
}

export function addAward({ type, amount }: Currency) {
  state.wallet.add(type, amount);
  saveState();
}

export function pay(type: CurrencyType, amount: number) {
  state.wallet.add(type, -amount);
  saveState();
}

export function increaseLevel() {
  state.previousLevel = {
    level: state.level,
    currentLevelUpgrades: state.currentLevelUpgrades,
  };
  state.level += 1;
  state.currentLevelUpgrades = {};

  handleLevelChanges();
  saveState();
}

export function retryLevel() {
  if (state.previousLevel) {
    Object.assign(state, state.previousLevel);
    delete state.previousLevel;
    handleLevelChanges();
    saveState();
  }
}

export function increasePlayed() {
  state.played += 1;
  saveState();
}

export function readState(): ReadonlyState {
  return state;
}

export function setCurrentLevelUpgrade(type: UpgradeType, upgrade: Upgrade) {
  state.currentLevelUpgrades[type] = upgrade;
  saveState();
}

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const dataString = localStorage.getItem(LOCAL_STORAGE_KEY) || '{}';
  try {
    const data = JSON.parse(dataString);

    const wallet = new Wallet(data.wallet);
    const level = getNumber(data.level, 1);
    const played = getNumber(data.played, 0);
    const energy = getNumber(data.energy, Infinity);
    const lastEnergyGiven = getNumber(data.lastEnergyGiven, Date.now());
    const currentLevelUpgrades = parseUpgrades(data.currentLevelUpgrades);

    state = { wallet, level, played, energy, lastEnergyGiven, currentLevelUpgrades };
  } catch (e) {
    const newKey = LOCAL_STORAGE_KEY + new Date().toISOString();
    localStorage.setItem(newKey, dataString);
    console.warn(`cannot read state, saving in "${newKey}"`, e);
  }
}

function getNumber(value: unknown, defaultValue?: number): number {
  if (typeof value === 'number') return value;
  if (value == null && defaultValue != null) return defaultValue;

  throw new TypeError(`expected number, got ${value}`);
}

export function isUpgradeAllowed(upgrade: UpgradeType, state: ReadonlyState): boolean {
  // hide upgrades when starting from scratch until played a bit
  switch (upgrade) {
    case 'rate':
      return state.level >= 4;

    case 'damage':
      return state.level >= 10;

    case 'player':
      return state.level > 20;
  }
}

function handleLevelChanges() {
  if (state.energy === Infinity && state.level >= 4) {
    state.energy = dim.energyMax;
  }

  if (state.level < 4) {
    state.energy = Infinity;
  }
}

export function getEnergy(): { energy: number; nextEnergyMs: number } {
  const now = Date.now();
  if (state.energy >= dim.energyMax) {
    return { energy: state.energy, nextEnergyMs: now + dim.energyGainInterval };
  } else {
    const msSinceLast = now - state.lastEnergyGiven;
    const energySinceLast = Math.floor(msSinceLast / dim.energyGainInterval);
    if (energySinceLast > 0) {
      state.energy = Math.min(dim.energyMax, state.energy + energySinceLast);
      state.lastEnergyGiven =
        state.energy === dim.energyMax
          ? now
          : state.lastEnergyGiven + energySinceLast * dim.energyGainInterval;
      saveState();
    }
    return {
      energy: state.energy,
      nextEnergyMs: state.lastEnergyGiven + dim.energyGainInterval - now,
    };
  }
}

export function subtractEnergy(): boolean {
  if (state.energy === Infinity || import.meta.env.DEV) {
    return true;
  }

  getEnergy();
  if (state.energy > 0) {
    state.energy -= 1;
    saveState();
    return true;
  } else {
    return false;
  }
}

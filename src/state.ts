import * as dim from '#dimensions';
import type {
  CardType,
  Currency,
  CurrencyType,
  Feature,
  ReadonlyState,
  RunUpgradeType,
  State,
  UpgradablePermanentParameters,
} from '#types';
import { CARDS, CURRENCIES, Wallet } from '#types';
import { exposeGlobalWindowProp, parseNumber, parseString, parseStringArray } from '#utils';

import { cardDefinitions, lookupLevelByNumberOfCards, minLevelForCards } from './cards';
import { parseUpgrades } from './main-screen-upgrades';

const LOCAL_STORAGE_KEY = 'rwns-game-state';

function createInitialState(): State {
  return {
    wallet: new Wallet(CURRENCIES),
    cards: new Wallet(CARDS),
    level: 1,
    played: 0,
    energy: Infinity,
    lastEnergyGiven: Date.now(),
    runUpgradeLevels: {},
    collectedGemIds: [],
  };
}

let state: State;

export function initState() {
  loadState();
  handleLevelChanges();
  exposeGlobalWindowProp('gameState', state);
}

export function resetState() {
  state = createInitialState();
  exposeGlobalWindowProp('gameState', state, true);
  saveState();
}

export function addAward({ type, amount }: Currency) {
  state.wallet.add(type, amount);
  saveState();
}

export function addCards(types: CardType[]) {
  for (const type of types) {
    state.cards.add(type, 1);
  }
  saveState();
}

export function pay(type: CurrencyType, amount: number) {
  state.wallet.add(type, -amount);
  saveState();
}

export function increaseLevel() {
  state.level = state.level + 1;
  state.runUpgradeLevels = {};
  state.collectedGemIds = [];

  handleLevelChanges();
  saveState();
}

export function increasePlayed() {
  state.played += 1;
  saveState();
}

export function readState(): ReadonlyState {
  return state;
}

export function setRunUpgradeLevel(type: RunUpgradeType, level: number) {
  state.runUpgradeLevels[type] = level;
  saveState();
}

export function increaseRunUpgradeLevel(type: RunUpgradeType) {
  state.runUpgradeLevels[type] = (state.runUpgradeLevels[type] ?? 0) + 1;
  saveState();
}

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const dataString = localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}';

  try {
    const data = JSON.parse(dataString);

    state = {
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
    resetState();
  }
}

export function isFeatureAllowed(upgrade: Feature, state: ReadonlyState): boolean {
  switch (upgrade) {
    case 'coins':
      return state.level >= 2; // guarantee wallet is showing

    case 'limitedEnergy':
      return state.level >= 4;

    case 'dailyGift':
      return state.level >= 5;

    case 'rateUpgrade':
      return state.level >= 4;

    case 'damageUpgrade':
      return state.level >= 10;

    case 'playersUpgrade':
      return state.level >= 20;

    case 'gems':
      return state.level >= minLevelForCards - 1;

    case 'cards':
      return state.level >= minLevelForCards;

    case 'bulkCards':
      return false; // for now
  }
}

function handleLevelChanges() {
  const params = getUpgradablePermanentParameters();
  if (state.energy === Infinity && isFeatureAllowed('limitedEnergy', state)) {
    state.energy = params.energyMax;
  }

  if (state.level < 4) {
    state.energy = Infinity;
  }
}

export function getEnergy(params: UpgradablePermanentParameters): {
  energy: number;
  nextEnergyMs: number;
} {
  const now = Date.now();
  if (state.energy >= params.energyMax) {
    return { energy: state.energy, nextEnergyMs: now + dim.energyGainInterval };
  } else {
    const msSinceLast = now - state.lastEnergyGiven;
    const energySinceLast = Math.floor(msSinceLast / dim.energyGainInterval);
    if (energySinceLast > 0) {
      state.energy = Math.min(params.energyMax, state.energy + energySinceLast);
      state.lastEnergyGiven =
        state.energy === params.energyMax
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

export function addEnergy(n = 1) {
  state.energy += n;
  saveState();
}

export function subtractEnergy(params: UpgradablePermanentParameters): boolean {
  if (state.energy === Infinity || import.meta.env.DEV) {
    return true;
  }

  getEnergy(params);
  if (state.energy > 0) {
    state.energy -= 1;
    saveState();
    return true;
  } else {
    return false;
  }
}

export function collectGem(id: string) {
  state.collectedGemIds.push(id);
  saveState();
}

export function getUpgradablePermanentParameters(): UpgradablePermanentParameters {
  const params: UpgradablePermanentParameters = {
    energyMax: dim.initialEnergyMax,
    coinsPerLevel: dim.initialCoinsPerLevel,
    gemsPerLevel: dim.initialGemsPerLevel,
    gemsGuaranteedPerRun: dim.initialGemsGuaranteeedPerRun,
    endBlockCoinsPerLevel: dim.initialEndBlockCoinsPerLevel,
    damageUpgradePrice: dim.initialDamageUpgradePrice,
    rateUpgradePrice: dim.initialRateUpgradePrice,
    playersUpgradePrice: dim.initialPlayersUpgradePrice,
    damageMaxUpgrade: dim.initialDamageMaxUpgrade,
    rateMaxUpgrade: dim.initialRateMaxUpgrade,
    playersMaxUpgrade: dim.initialPlayersMaxUpgrade,
    objectHitPoints: dim.initialObjectHitPoints,
    maxEndBlockHitPoints: dim.initialMaxEndBlockHitPoints,
    gemHitPoints: dim.initialGemHitPoints,
    playerBulletHitPoints: dim.initialPlayerBulletHitPoints,
    playerBulletRange: dim.initialPlayerBulletRange,
    playerHitPoints: dim.initialPlayerHitPoints,
    playerShotsPerSecond: dim.initialPlayerShotsPerSecond,
    startingPlayers: dim.initialStartingPlayers,
    cardsBulkBuyingRate: 1,
  };

  for (const [cardType, cardNumber] of state.cards.entries()) {
    const level = lookupLevelByNumberOfCards(cardNumber);
    cardDefinitions[cardType].performUpgrade(level, params);
  }

  return params;
}

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
  state.lastDailyGiftGiven = today;
  saveState();
}

function getToday(): string {
  return new Date().toISOString().split('T')[0]!;
}

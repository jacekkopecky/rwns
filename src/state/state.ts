import * as dim from '#dimensions';
import type {
  CardType,
  Currency,
  CurrencyType,
  ReadonlyState,
  RunType,
  RunUpgradeType,
  State,
  UpgradablePermanentParameters,
} from '#types';
import { CARDS, CURRENCIES, Wallet } from '#types';
import { exposeGlobalWindowProp, getToday } from '#utils';

import { cardDefinitions, lookupLevelByNumberOfCards } from '../cards';
import { pickNextBackToBasicsDate } from '../side-games';

import { handleLevelChanges } from './features';
import { loadState, saveState } from './storage';

export function createInitialState(): State {
  const today = getToday();
  return {
    level: 1,
    wallet: new Wallet(CURRENCIES),
    cards: new Wallet(CARDS),
    played: 0,
    energy: Infinity,
    lastEnergyGiven: Date.now(),
    runUpgradeLevels: {},
    collectedGemIds: [],
    lastDailyGiftGiven: today, // don't give the gift on the first day
    startDate: today,
    sideGames: {
      backToBasics: {
        level: 1,
        played: 0,
        nextAllowed: today,
      },
    },
  };
}

export let _state: State;

export function initState() {
  _state = loadState() ?? createInitialState();
  handleLevelChanges();
  exposeGlobalWindowProp('gameState', _state);
}

export function readState(): ReadonlyState {
  return _state;
}

export function resetState() {
  _state = createInitialState();
  exposeGlobalWindowProp('gameState', _state, true);
  saveState();
}

export function addAward({ type, amount }: Currency) {
  _state.wallet.add(type, amount);
  saveState();
}

export function addCards(types: CardType[]) {
  for (const type of types) {
    _state.cards.add(type, 1);
  }
  saveState();
}

export function pay(type: CurrencyType, amount: number) {
  const remainingAmount = _state.wallet.add(type, -amount);
  saveState();
  return remainingAmount;
}

export function increaseLevel(runType: RunType) {
  switch (runType) {
    case 'normal':
      _state.level = _state.level + 1;
      _state.runUpgradeLevels = {};
      _state.collectedGemIds = [];

      handleLevelChanges();
      saveState();
      break;

    case 'backToBasics':
      _state.sideGames.backToBasics.level += 1;
      saveState();
      break;
  }
}

export function increasePlayed(runType: RunType) {
  switch (runType) {
    case 'normal':
      _state.played += 1;
      saveState();
      break;

    case 'backToBasics':
      _state.sideGames.backToBasics.played += 1;
      _state.sideGames.backToBasics.nextAllowed = pickNextBackToBasicsDate();
      saveState();
      break;
  }
}

export function setRunUpgradeLevel(type: RunUpgradeType, level: number) {
  _state.runUpgradeLevels[type] = level;
  saveState();
}

export function increaseRunUpgradeLevel(type: RunUpgradeType) {
  _state.runUpgradeLevels[type] = (_state.runUpgradeLevels[type] ?? 0) + 1;
  saveState();
}

export function collectGem(id: string) {
  _state.collectedGemIds.push(id);
  saveState();
}

export function getUpgradablePermanentParameters(
  runType: RunType = 'normal',
): UpgradablePermanentParameters {
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
    damageStartUpgrade: 0,
    rateStartUpgrade: 0,
    playersStartUpgrade: 0,
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

  if (runType === 'normal') {
    for (const [cardType, cardNumber] of _state.cards.entries()) {
      const level = lookupLevelByNumberOfCards(cardNumber);
      cardDefinitions[cardType].performUpgrade(level, params);
    }
  }

  return params;
}

export function getLevelRandomSeed(state: ReadonlyState, runType: RunType): string {
  switch (runType) {
    case 'normal':
      return String(state.level);

    case 'backToBasics': {
      const level = state.sideGames.backToBasics.level || 1;
      // same level 1 as normal, but different afterwards
      return level === 1 ? '1' : `backToBasics ${level}`;
    }
  }
}

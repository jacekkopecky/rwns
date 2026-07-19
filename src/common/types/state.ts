import type { CardType } from './cards';
import type { CurrencyType } from './currencies';
import type { SideGamesState } from './side-games';
import type { RunUpgradeLevels, RunUpgradeType } from './upgrades';
import type { DeepReadonly } from './utils';
import type { ReadonlyWallet, SerializedWallet, Wallet } from './wallet';

export interface State {
  level: number;
  runUpgradeLevels: RunUpgradeLevels;
  collectedGemIds: string[];
  wallet: Wallet<CurrencyType>;
  cards: Wallet<CardType>;
  played: number;
  energy: number;
  lastEnergyGiven: number; // milliseconds since epoch
  lastDailyGiftGiven?: string; // iso8601 date yyyy-mm-dd
  readonly startDate: string; // iso8601 date yyyy-mm-dd
  sideGames: SideGamesState;
}

export type ReadonlyState = Omit<DeepReadonly<State>, 'wallet' | 'cards'> & {
  wallet: ReadonlyWallet<CurrencyType>;
  cards: ReadonlyWallet<CardType>;
};

export type SerializedState = Omit<DeepReadonly<State>, 'wallet' | 'cards'> & {
  wallet: SerializedWallet<CurrencyType>;
  cards: SerializedWallet<CardType>;
};

export type Feature =
  | 'coins'
  | 'gems'
  | 'limitedEnergy'
  | 'dailyGift'
  | `${RunUpgradeType}Upgrade`
  | 'cards'
  | 'bulkCards';

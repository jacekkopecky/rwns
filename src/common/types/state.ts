import type { CardType } from './cards';
import type { CurrencyType } from './currencies';
import type { RunUpgradeLevels, RunUpgradeType } from './upgrades';
import type { DeepReadonly } from './utils';
import type { ReadonlyWallet, Wallet } from './wallet';

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
}

export type ReadonlyState = Omit<DeepReadonly<State>, 'wallet' | 'cards'> & {
  wallet: ReadonlyWallet<CurrencyType>;
  cards: ReadonlyWallet<CardType>;
};

export type Feature =
  | 'coins'
  | 'gems'
  | 'limitedEnergy'
  | 'dailyGift'
  | `${RunUpgradeType}Upgrade`
  | 'cards'
  | 'bulkCards';

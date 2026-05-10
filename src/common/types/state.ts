import type { RunUpgradeLevels, RunUpgradeType } from './upgrades';
import type { DeepReadonly } from './utils';
import type { ReadonlyWallet, Wallet } from './wallet';

export interface CurrentLevelState {
  level: number;
  runUpgradeLevels: RunUpgradeLevels;
  collectedGemIds: string[];
}

export interface State extends CurrentLevelState {
  wallet: Wallet;
  played: number;
  energy: number;
  lastEnergyGiven: number; // milliseconds since epoch
  previousLevel?: CurrentLevelState;
}

export type ReadonlyState = Omit<DeepReadonly<State>, 'wallet'> & { wallet: ReadonlyWallet };

export type Feature = 'limitedEnergy' | `${RunUpgradeType}Upgrade` | 'cards';

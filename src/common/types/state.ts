import type { UpgradeBag } from './upgrades';
import type { DeepReadonly } from './utils';
import type { ReadonlyWallet, Wallet } from './wallet';

export interface CurrentLevelState {
  level: number;
  currentLevelUpgrades: UpgradeBag;
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

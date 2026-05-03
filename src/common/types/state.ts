import type { UpgradeBag } from './upgrades';
import type { ReadonlyWallet, Wallet } from './wallet';

export interface State {
  wallet: Wallet;
  level: number;
  played: number;
  currentLevelUpgrades: UpgradeBag;
  previousLevel?: Pick<State, 'level' | 'currentLevelUpgrades'>;
}

export type ReadonlyState = Omit<Readonly<State>, 'wallet'> & { wallet: ReadonlyWallet };

export const RUN_UPGRADE_TYPES = ['players', 'damage', 'rate'] as const;
export type RunUpgradeType = (typeof RUN_UPGRADE_TYPES)[number];

export type RunUpgradeLevels = Partial<Record<RunUpgradeType, number>>;

export interface UpgradablePermanentParameters {
  energyMax: number;

  // awards
  coinsPerLevel: number;
  gemsPerLevel: number;
  endBlockCoinsPerLevel: number;

  // upgrade prices
  damageUpgradePrice: number;
  rateUpgradePrice: number;
  playersUpgradePrice: number;

  // max upgrades
  damageMaxUpgrade: number;
  rateMaxUpgrade: number;
  playersMaxUpgrade: number;

  // object strength
  objectHitPoints: number;
  maxEndBlockHitPoints: number;
  gemHitPoints: number;

  // player strength
  playerBulletHitPoints: number;
  playerBulletRange: number;
  playerHitPoints: number;
  playerShotsPerSecond: number;
  startingPlayers: number;
}

import { parseNumber, parseObject } from '#utils';

export const RUN_UPGRADE_TYPES = ['players', 'damage', 'rate'] as const;
export type RunUpgradeType = (typeof RUN_UPGRADE_TYPES)[number];

export type RunUpgradeLevels = Partial<Record<RunUpgradeType, number>>;

export interface UpgradablePermanentParameters {
  energyMax: number;

  // awards
  coinsPerLevel: number;
  gemsPerLevel: number;
  gemsGuaranteedPerRun: number;
  endBlockCoinsPerLevel: number;
  endGateGems: number;

  // upgrade prices
  damageUpgradePrice: number;
  rateUpgradePrice: number;
  playersUpgradePrice: number;

  cardsBulkBuyingRate: number; // e.g. 0.95 means that buying cards in bulk gives us 5% off

  // start upgrades
  damageStartUpgrade: number;
  rateStartUpgrade: number;
  playersStartUpgrade: number;

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

export function parseUpgrades(data: unknown): RunUpgradeLevels {
  const obj = parseObject(data, 'run upgrade levels');
  if (!obj) return {};

  const retval: RunUpgradeLevels = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!RUN_UPGRADE_TYPES.includes(key as RunUpgradeType)) {
      throw new TypeError(`unknown upgrade type ${key}`);
    }
    retval[key as RunUpgradeType] = parseNumber(value);
  }
  return retval;
}

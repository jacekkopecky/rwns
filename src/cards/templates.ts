import type { CardTemplate } from './types';

export const range: CardTemplate = {
  rarity: 'common',
  typeLabel: 'range',
  performUpgrade(level, params) {
    params.playerBulletRange += level;
  },
};

export const rate: CardTemplate = {
  rarity: 'common',
  typeLabel: 'fire rate',
  performUpgrade(level, params) {
    params.playerShotsPerSecond *= 1.01 ** level; // extra small because we don't want a stream of bullets
  },
};

export const endBlockCoins: CardTemplate = {
  rarity: 'common',
  typeLabel: 'income',
  performUpgrade(level, params) {
    params.endBlockCoinsPerLevel += level;
  },
};

export const inRunCoins: CardTemplate = {
  rarity: 'common',
  typeLabel: 'income',
  performUpgrade(level, params) {
    params.coinsPerLevel += level;
  },
};

export const damage: CardTemplate = {
  rarity: 'common',
  typeLabel: 'damage',
  performUpgrade(level, params) {
    params.playerBulletHitPoints *= 1.5 ** level;
  },
};

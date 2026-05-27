import type { CardTemplate } from './types';
import * as state from '../state';

export const range: CardTemplate = {
  rarity: 'common',
  typeLabel: 'range',
  description: 'make bullets fly farther',
  performUpgrade(level, params) {
    params.playerBulletRange += level;
  },
};

export const rate: CardTemplate = {
  rarity: 'common',
  typeLabel: 'fire rate',
  description: 'make guns reload quicker',
  performUpgrade(level, params) {
    params.playerShotsPerSecond *= 1.01 ** level; // extra small because we don't want a stream of bullets
  },
};

export const endBlockCoins: CardTemplate = {
  rarity: 'common',
  typeLabel: 'income',
  description: 'hide extra coins in final blocks',
  performUpgrade(level, params) {
    params.endBlockCoinsPerLevel += level;
  },
};

export const inRunCoins: CardTemplate = {
  rarity: 'common',
  typeLabel: 'income',
  description: 'add more coins to money bags',
  performUpgrade(level, params) {
    params.coinsPerLevel += level;
  },
};

export const damage: CardTemplate = {
  rarity: 'common',
  typeLabel: 'damage',
  description: 'make bullets stronger',
  performUpgrade(level, params) {
    params.playerBulletHitPoints *= 1.5 ** level;
  },
};

export const energy: CardTemplate = {
  rarity: 'rare',
  typeLabel: 'energy',
  description: 'increase maximum energy',
  performUpgrade(level, params) {
    params.energyMax += level;
  },
  onLevelUp() {
    state.addEnergy(1);
  },
};

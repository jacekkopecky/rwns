import * as state from '../state';

import type { CardTemplate } from './types';

export const range: CardTemplate = {
  typeLabel: 'range',
  description: 'make bullets fly farther',
  performUpgrade(level, params) {
    params.playerBulletRange += level;
  },
};

export const rate: CardTemplate = {
  typeLabel: 'fire rate',
  description: 'make guns reload quicker',
  performUpgrade(level, params) {
    params.playerShotsPerSecond *= 1.01 ** level; // extra small because we don't want a stream of bullets
  },
};

export const endBlockCoins: CardTemplate = {
  typeLabel: 'income',
  description: 'hide coins in final blocks',
  performUpgrade(level, params) {
    params.endBlockCoinsPerLevel += level;
  },
};

export const endBlockCoinsR: CardTemplate = {
  typeLabel: 'income',
  description: 'hide even more coins in final blocks',
  performUpgrade(level, params) {
    params.endBlockCoinsPerLevel += 3 * level;
  },
};

export const inRunCoins: CardTemplate = {
  typeLabel: 'income',
  description: 'add coins to money bags',
  performUpgrade(level, params) {
    params.coinsPerLevel += level;
  },
};

export const inRunCoinsR: CardTemplate = {
  typeLabel: 'income',
  description: 'add even more coins to money bags',
  performUpgrade(level, params) {
    params.coinsPerLevel += 3 * level;
  },
};

export const gemsPerLevel: CardTemplate = {
  typeLabel: 'income',
  description: 'add more gems to levels',
  performUpgrade(level, params) {
    params.gemsPerLevel += level;
  },
};

export const damage: CardTemplate = {
  typeLabel: 'damage',
  description: 'make bullets stronger',
  performUpgrade(level, params) {
    params.playerBulletHitPoints *= 1.5 ** level;
  },
};

export const energy: CardTemplate = {
  typeLabel: 'energy',
  description: 'increase maximum energy',
  performUpgrade(level, params) {
    params.energyMax += level;
  },
  onLevelUp() {
    state.addEnergy(1);
  },
};

export const startDamage: CardTemplate = {
  typeLabel: 'damage',
  description: 'increase starting damage level',
  performUpgrade(level, params) {
    params.damageStartUpgrade += level;
  },
  onLevelUp() {
    state.increaseRunUpgradeLevel('damage');
  },
};

export const startRate: CardTemplate = {
  typeLabel: 'fire rate',
  description: 'increase starting fire rate level',
  performUpgrade(level, params) {
    params.rateStartUpgrade += level;
  },
  onLevelUp() {
    state.increaseRunUpgradeLevel('rate');
  },
};

export const maxDamage: CardTemplate = {
  typeLabel: 'max dmg',
  description: 'increase the maximum available damage upgrade',
  performUpgrade(level, params) {
    params.damageMaxUpgrade += level;
  },
  onLevelUp() {
    state.increaseRunUpgradeLevel('damage');
  },
};

export const maxRate: CardTemplate = {
  typeLabel: 'max rate',
  description: 'increase the maximum available fire-rate upgrade',
  performUpgrade(level, params) {
    params.rateMaxUpgrade += level;
  },
  onLevelUp() {
    state.increaseRunUpgradeLevel('rate');
  },
};

export const startPlayers: CardTemplate = {
  typeLabel: 'troops',
  description: 'increase starting number of robots',
  performUpgrade(level, params) {
    params.playersStartUpgrade += level;
  },
  onLevelUp() {
    state.increaseRunUpgradeLevel('players');
  },
};

export const maxPlayers: CardTemplate = {
  typeLabel: 'troops',
  description: 'increase the maximum available number of robots',
  performUpgrade(level, params) {
    params.playersMaxUpgrade += level;
  },
  onLevelUp() {
    state.increaseRunUpgradeLevel('players');
  },
};

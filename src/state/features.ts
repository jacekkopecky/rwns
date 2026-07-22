import type { Feature, ReadonlyState } from '#types';

import { minLevelForCards } from '../cards/constants';

import { _state, getUpgradablePermanentParameters } from './state';

export function isFeatureAllowed(upgrade: Feature, state: ReadonlyState): boolean {
  switch (upgrade) {
    case 'coins':
      return state.level >= 2; // guarantee wallet is showing

    case 'limitedEnergy':
      return state.level >= 4;

    case 'dailyGift':
      return state.level >= 5;

    case 'rateUpgrade':
      return state.level >= 4;

    case 'damageUpgrade':
      return state.level >= 10;

    case 'playersUpgrade':
      return state.level >= 20;

    case 'gems':
      return state.level >= minLevelForCards - 1;

    case 'cards':
      return state.level >= minLevelForCards;

    case 'bulkCards':
      return false; // for now

    case 'backToBasics':
      return state.level >= 100;
  }
}

export function handleLevelChanges() {
  const params = getUpgradablePermanentParameters();
  if (_state.energy === Infinity && isFeatureAllowed('limitedEnergy', _state)) {
    _state.energy = params.energyMax;
  }

  if (_state.level < 4) {
    _state.energy = Infinity;
  }
}

import * as dim from '#dimensions';
import type { UpgradablePermanentParameters } from '#types';

import { _state } from './state';
import { saveState } from './storage';

export function getEnergy(params: UpgradablePermanentParameters): {
  energy: number;
  nextEnergyMs: number;
} {
  const now = Date.now();
  if (_state.energy >= params.energyMax) {
    return { energy: _state.energy, nextEnergyMs: now + dim.energyGainInterval };
  } else {
    const msSinceLast = now - _state.lastEnergyGiven;
    const energySinceLast = Math.floor(msSinceLast / dim.energyGainInterval);
    if (energySinceLast > 0) {
      _state.energy = Math.min(params.energyMax, _state.energy + energySinceLast);
      _state.lastEnergyGiven = _state.lastEnergyGiven + energySinceLast * dim.energyGainInterval;
      saveState();
    }
    return {
      energy: _state.energy,
      nextEnergyMs: _state.lastEnergyGiven + dim.energyGainInterval - now,
    };
  }
}

export function addEnergy(n = 1) {
  _state.energy += n;
  saveState();
}

export function subtractEnergy(params: UpgradablePermanentParameters): boolean {
  if (_state.energy === Infinity || import.meta.env.DEV) {
    return true;
  }

  getEnergy(params);
  if (_state.energy > 0) {
    if (_state.energy >= params.energyMax) {
      _state.lastEnergyGiven = Date.now();
    }
    _state.energy -= 1;
    saveState();
    return true;
  } else {
    return false;
  }
}

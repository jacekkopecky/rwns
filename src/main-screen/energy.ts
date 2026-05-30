import type { UpgradablePermanentParameters } from '#types';
import { fillOrHide, getEl, toggleHidden } from '#utils';

import { getEnergy, getUpgradablePermanentParameters } from '../state';
import { isInRun } from './main-screen';

const el = {
  main: getEl('main'),
  energy: getEl('#playStats .energy'),
};

export function updateEnergyCount(params: UpgradablePermanentParameters) {
  const { energy, nextEnergyMs } = getEnergy(params);
  if (energy < Infinity) {
    if (energy >= params.energyMax) {
      fillOrHide(el.energy, energy);
      clearCounter();
    } else {
      setupCounter(nextEnergyMs, energy);
      showEnergy(nextEnergyMs, energy);
    }
  } else {
    toggleHidden(el.energy, true);
  }

  el.main.classList.toggle('no-energy', !energy);
}

export function hasEnergy() {
  return !el.main.classList.contains('no-energy');
}

function showEnergy(nextEnergyMs: number, energy: number) {
  const energyMin = Math.floor(nextEnergyMs / 60000);
  const energyStr = energyMin ? `${energyMin}min` : `${Math.ceil(nextEnergyMs / 1000)}s`;
  fillOrHide(el.energy, `${energy} (+1 in ${energyStr})`);
}

let counterInterval: number | null = null;
let counterNextCheck = 0;
let counterNextEnergyTime = -1;
let counterEnergyValue = -1;

function setupCounter(nextEnergyMs: number, energy: number) {
  counterNextEnergyTime = Date.now() + nextEnergyMs;
  counterEnergyValue = energy;
  counterNextCheck = 0;
  counterInterval ??= setInterval(updateEnergyInInterval, 1000);
}

function clearCounter() {
  if (counterInterval) {
    clearInterval(counterInterval);
    counterInterval = null;
  }
}

function updateEnergyInInterval() {
  if (isInRun()) {
    // we're not updating the value while in run
    // we will start the counter, if needed, when the run finishes
    clearCounter();
    return;
  }

  const now = Date.now();
  if (now > counterNextEnergyTime) {
    updateEnergyCount(getUpgradablePermanentParameters());
    return;
  }

  if (now > counterNextCheck) {
    const nextEnergyMs = counterNextEnergyTime - now;
    showEnergy(nextEnergyMs, counterEnergyValue);
    if (nextEnergyMs <= 61000) {
      counterNextCheck = 0; // check next time
    } else {
      counterNextCheck = now + (nextEnergyMs % 60000);
    }
  }
}

import type { UpgradablePermanentParameters } from '#types';
import { animateValue, fillOrHide, getEl, isValueAnimating, toggleHidden } from '#utils';

import { isSectionActive } from '../sections';
import { getEnergy, getUpgradablePermanentParameters } from '../state';

const el = {
  main: getEl('main'),
  energy: getEl('#playStats .energy'),
  energyNext: getEl('#playStats .energy .nextTime'),
};

export function updateEnergyCount(params: UpgradablePermanentParameters) {
  const { energy, nextEnergyMs } = getEnergy(params);
  if (energy < Infinity) {
    if (energy >= params.energyMax) {
      clearCounter();
      showEnergy(null, energy);
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

function showEnergy(nextEnergyMs: number | null, energy: number) {
  if (!isValueAnimating(el.energy)) {
    fillOrHide(el.energy, String(energy));
  }

  if (nextEnergyMs) {
    const energyMin = Math.floor(nextEnergyMs / 60000);
    const energyStr = energyMin ? `${energyMin}min` : `${Math.ceil(nextEnergyMs / 1000)}s`;
    el.energyNext.textContent = `(+1 in ${energyStr})`;
  } else {
    el.energyNext.textContent = '';
  }
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
  if (isSectionActive('run')) {
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

export function animateAddedEnergy(start: number, target: number) {
  animateValue(el.energy, start, target);
}

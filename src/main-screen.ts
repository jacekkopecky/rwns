import type { UpgradablePermanentParameters } from '#types';
import { fillOrHide, fillWalletEls, getEl, toggleHidden } from '#utils';

import { initUpgrades, updateUpgrades } from './main-screen-upgrades';
import { init as initRunScreen, prepareRun, startRun } from './run';
import {
  initState,
  readState,
  resetState,
  getEnergy,
  subtractEnergy,
  getUpgradablePermanentParameters,
  isFeatureAllowed,
  canGiveDailyGift,
  increaseLevel,
} from './state';
import { showSection } from './sections';
import { updateCardsVisibility } from './cards';

const el = {
  main: getEl('main'),
  canvas: getEl('#webglCanvas'),
  topButtons: getEl('#topBar'),
  exitBtn: getEl('#exitBtn', HTMLButtonElement),
  settingsBtn: getEl('#settingsBtn', HTMLButtonElement),
  endRunScreenProgress: getEl('#endRunScreen button.progress', HTMLButtonElement),
  endRunScreenRetry: getEl('#endRunScreen button.retry'),
  walletContainer: getEl('#topBar .wallet'),
  wallet: {
    gem: getEl('#topBar .wallet .gem'),
    coin: getEl('#topBar .wallet .coin'),
    card: getEl('#topBar .wallet .card'),
  },
  playStats: {
    played: getEl('#playStats .played'),
    level: getEl('#playStats .level'),
    energy: getEl('#playStats .energy'),
  },
  upgradeButtons: getEl('#mainScreen .upgradeButtons'),
};

export function init() {
  initState();
  initRunScreen();
  initUpgrades();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.canvas.addEventListener('mousedown', startPlaying);
  el.endRunScreenProgress.addEventListener('click', nextLevel);
  el.endRunScreenRetry.addEventListener('click', retry);
  el.settingsBtn.addEventListener('click', showSettings);

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  el.main.addEventListener('fullscreenchange', () => updateMainScreen());
  document.addEventListener('visibilitychange', () => updateMainScreen());
}

export function startPlaying() {
  el.endRunScreenProgress.disabled = false;

  const params = getUpgradablePermanentParameters();
  // this gets called on every touch of the screen, so ignore it if already in a game
  if (!isInRun()) {
    if (el.main.classList.contains('no-energy')) {
      updateEnergyCount(params);
      return;
    }

    if (!subtractEnergy(params)) return; // wait until next energy

    el.main.classList.add('run');
    startRun();
  }
}

export function isInRun() {
  return el.main.classList.contains('run');
}

function retry() {
  showSection('mainScreen');
}

function nextLevel() {
  el.endRunScreenProgress.disabled = true;
  increaseLevel();
  showSection('mainScreen');
}

export function showMainScreen() {
  el.main.classList.remove('run');
  el.exitBtn.disabled = false;

  const state = readState();
  const params = getUpgradablePermanentParameters();

  prepareRun(state, params);
  updateMainScreen(state, params);

  if (canGiveDailyGift(state)) {
    showSection('dailyGift');
  }
}

export function updateMainScreen(state = readState(), params = getUpgradablePermanentParameters()) {
  fillWalletEls(state.wallet, el.wallet);
  toggleHidden(el.walletContainer, !isFeatureAllowed('coins', state));

  fillOrHide(el.playStats.level, state.level, String);
  fillOrHide(el.playStats.played, state.played, String);

  updateEnergyCount(params);
  updateUpgrades(state, params);
  updateCardsVisibility(state);
}

function updateEnergyCount(params: UpgradablePermanentParameters) {
  const { energy, nextEnergyMs } = getEnergy(params);
  if (energy < Infinity) {
    if (energy) {
      fillOrHide(el.playStats.energy, energy);
    } else {
      const energyMin = Math.floor(nextEnergyMs / 60000);
      // const energySec = Math.floor(nextEnergyMs / 1000 - energyMin * 60);
      // const energyStr = energyMin
      //   ? `${energyMin}:${String(energySec).padStart(2, '0')}`
      //   : `${Math.ceil(nextEnergyMs / 1000)}s`;
      const energyStr = energyMin ? `${energyMin}min` : `${Math.ceil(nextEnergyMs / 1000)}s`;
      fillOrHide(el.playStats.energy, `0 (next in ${energyStr})`);
    }
  } else {
    toggleHidden(el.playStats.energy, true);
  }

  el.main.classList.toggle('no-energy', !energy);
}

function showSettings() {
  if (window.confirm('reset all data?')) {
    resetState();
    showSection('mainScreen');
  }
}

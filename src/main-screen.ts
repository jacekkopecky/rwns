import { fillOrHide, toggleHidden } from '#utils';

import { initUpgrades, updateUpgrades } from './main-screen-upgrades';
import { init as initRunScreen, handleRetryButton, prepareRun, startRun } from './run';
import { initState, readState, resetState, getEnergy, subtractEnergy } from './state';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webglCanvas')!,
  topButtons: document.querySelector<HTMLElement>('#topBar')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
  settingsBtn: document.querySelector<HTMLButtonElement>('#settingsBtn')!,
  endRunScreenOK: document.querySelector('#endRunScreen button.ok')!,
  endRunScreenRetry: document.querySelector('#endRunScreen button.retry')!,
  walletContainer: document.querySelector('#mainScreenWallet')!,
  wallet: {
    gem: document.querySelector('#mainScreenWallet .gem')!,
    coin: document.querySelector('#mainScreenWallet .coin')!,
  },
  playStats: {
    played: document.querySelector('#playStats .played')!,
    level: document.querySelector('#playStats .level')!,
    energy: document.querySelector('#playStats .energy')!,
  },
  upgradeButtons: document.querySelector<HTMLElement>('#upgradeButtons')!,
};

export function init() {
  initState();
  initRunScreen();
  initUpgrades();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.canvas.addEventListener('mousedown', startPlaying);
  el.endRunScreenOK.addEventListener('click', showMainScreen);
  el.endRunScreenRetry.addEventListener('click', retry);
  el.settingsBtn.addEventListener('click', showSettings);

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  el.main.addEventListener('fullscreenchange', updateMainScreen);
  document.addEventListener('visibilitychange', updateMainScreen);

  showMainScreen();
}

export function startPlaying() {
  // this gets called on every touch of the screen, so ignore it if already in a game
  if (!el.main.classList.contains('run')) {
    if (el.main.classList.contains('no-energy')) {
      updateEnergyCount();
      return;
    }

    if (!subtractEnergy()) return; // wait until next energy

    el.main.classList.add('run');
    startRun();
  }
}

function retry() {
  handleRetryButton();
  showMainScreen();
}

export function showMainScreen() {
  el.main.classList.remove('run');
  el.exitBtn.disabled = false;
  prepareRun();

  updateMainScreen();
}

export function updateMainScreen() {
  const state = readState();

  fillOrHide(el.wallet.coin, state.wallet.read('coin'));
  fillOrHide(el.wallet.gem, state.wallet.read('gem'));
  toggleHidden(el.walletContainer, !state.wallet.read('coin') && !state.wallet.read('gem'));

  fillOrHide(el.playStats.level, state.level, String);
  fillOrHide(el.playStats.played, state.played, String);

  updateEnergyCount();
  updateUpgrades(state);
}

function updateEnergyCount() {
  const { energy, nextEnergyMs } = getEnergy();
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
    showMainScreen();
  }
}

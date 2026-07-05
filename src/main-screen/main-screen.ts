import { animateValue, fillOrHide, fillWalletEls, getEl, toggleHidden } from '#utils';

import { updateCardsVisibility } from '../cards';
import { init as initRunScreen, prepareRun, startRun } from '../run';
import { isSectionActive, showSection } from '../sections';
import { updateSettingsVisibility } from '../settings';
import { isOnSplashScreen } from '../splash-screen';
import {
  canGiveDailyGift,
  getUpgradablePermanentParameters,
  increaseLevel,
  initState,
  isFeatureAllowed,
  readState,
  subtractEnergy,
} from '../state';

import { hasEnergy, updateEnergyCount } from './energy';
import { initUpgrades, updateUpgrades } from './run-upgrades';

const el = {
  main: getEl('main'),
  canvas: getEl('#webglCanvas'),
  topButtons: getEl('#topBar'),
  exitBtn: getEl('#exitBtn', HTMLButtonElement),
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

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  document.addEventListener('visibilitychange', updateMainScreenIfNotInRun);
}

export function startPlaying() {
  el.endRunScreenProgress.disabled = false;

  const params = getUpgradablePermanentParameters();
  // this gets called on every touch of the screen, so ignore it if already in a game
  if (!isInRun()) {
    if (!hasEnergy()) {
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

let dailyGiftTimeout: number | null = null;

export function showMainScreen() {
  if (dailyGiftTimeout) clearTimeout(dailyGiftTimeout);
  el.main.classList.remove('run');
  el.exitBtn.disabled = false;

  const state = readState();
  const params = getUpgradablePermanentParameters();

  updateMainScreen(state, params);

  if (canGiveDailyGift(state)) {
    dailyGiftTimeout = setTimeout(() => {
      if (isSectionActive('mainScreen') && !isInRun() && !isOnSplashScreen()) {
        showSection('dailyGift');
      }
    }, 1000);
  }
}

function updateMainScreenIfNotInRun() {
  if (!isInRun()) updateMainScreen();
}

export function updateMainScreen(state = readState(), params = getUpgradablePermanentParameters()) {
  prepareRun(state, params);

  fillWalletEls(state.wallet, el.wallet);
  toggleHidden(el.walletContainer, !isFeatureAllowed('coins', state));

  // ensure that gems are always visible once we've spent any
  const hasAnyCards = state.cards.entries().some(([, val]) => val > 0);
  el.wallet.gem.classList.toggle('neverHidden', hasAnyCards);

  fillOrHide(el.playStats.level, state.level, String);
  fillOrHide(el.playStats.played, state.played, String);

  updateEnergyCount(params);
  updateUpgrades(state, params);
  updateCardsVisibility(state);
  updateSettingsVisibility(state);
}

export function animateMainWallet(type: keyof typeof el.wallet, start: number, target: number) {
  const walletEl = el.wallet[type];
  animateValue(walletEl, start, target);
}

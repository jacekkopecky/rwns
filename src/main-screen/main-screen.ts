import { animateValue, fillOrHide, fillWalletEls, getEl, toggleHidden } from '#utils';

import { updateCardsVisibility } from '../cards';
import { prepareRun } from '../run';
import { isSectionActive, showSection } from '../sections';
import { updateSettingsVisibility } from '../settings';
import { isOnSplashScreen } from '../splash-screen';
import {
  canGiveDailyGift,
  getUpgradablePermanentParameters,
  initState,
  isFeatureAllowed,
  readState,
  subtractEnergy,
} from '../state';

import { hasEnergy, updateEnergyCount } from './energy';
import { initUpgrades, updateUpgrades } from './run-upgrades';

const el = {
  main: getEl('main'),
  section: getEl('#mainScreen'),
  canvas: getEl('#webglCanvas'),
  topButtons: getEl('#mainScreen .topBar'),
  exitBtn: getEl('#exitBtn', HTMLButtonElement),
  walletContainer: getEl('#mainScreen .topBar .wallet'),
  wallet: {
    gem: getEl('#mainScreen .topBar .wallet .gem'),
    coin: getEl('#mainScreen .topBar .wallet .coin'),
    card: getEl('#mainScreen .topBar .wallet .card'),
  },
  playStats: {
    played: getEl('#playStats .played'),
    level: getEl('#playStats .level'),
  },
  upgradeButtons: getEl('#mainScreen .upgradeButtons'),
};

export function init() {
  initState();
  initUpgrades();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.canvas.addEventListener('mousedown', startPlaying);

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  document.addEventListener('visibilitychange', updateMainScreenIfNotInRun);
}

export function startPlaying() {
  // this gets called on every touch of the screen, so ignore it if already in a game
  if (isSectionActive('mainScreen')) {
    const params = getUpgradablePermanentParameters();
    if (!hasEnergy()) {
      updateEnergyCount(params);
      return;
    }

    if (!subtractEnergy(params)) return; // wait until next energy

    showSection('run');
  }
}

let dailyGiftTimeout: number | null = null;

export function showMainScreen() {
  if (dailyGiftTimeout) clearTimeout(dailyGiftTimeout);
  el.exitBtn.disabled = false;

  const state = readState();
  const params = getUpgradablePermanentParameters();

  updateMainScreen(state, params);

  if (canGiveDailyGift(state)) {
    dailyGiftTimeout = setTimeout(() => {
      if (isSectionActive('mainScreen') && !isOnSplashScreen()) {
        showSection('dailyGift');
      }
    }, 1000);
  }
}

function updateMainScreenIfNotInRun() {
  if (!isSectionActive('run')) updateMainScreen();
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

import type { ReadonlyState } from '#types';
import { animateValue, fillOrHide, fillWalletEls, getEl, toggleHidden } from '#utils';

import { updateCardsVisibility } from '../cards';
import { prepareRun } from '../run';
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
  section: getEl('#mainScreen'),
  topButtons: getEl('#mainScreen .topBar'),
  exitBtn: getEl('#exitBtn', HTMLButtonElement),
  walletContainer: getEl('#mainWallet .wallet'),
  wallet: {
    gem: getEl('#mainWallet .wallet .gem'),
    coin: getEl('#mainWallet .wallet .coin'),
    card: getEl('#mainWallet .wallet .card'),
  },
  playStats: {
    played: getEl('#mainScreen .playStats .played'),
    level: getEl('#mainScreen .playStats .level'),
  },
  upgradeButtons: getEl('#mainScreen .upgradeButtons'),
};

export function init() {
  initState();
  initUpgrades();

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  document.addEventListener('visibilitychange', updateMainScreenIfNotInRun);
}

export function startPlaying(): boolean {
  const params = getUpgradablePermanentParameters();
  if (!hasEnergy()) {
    updateEnergyCount(params);
    return false;
  }

  // only start playing if we do have enough energy
  if (subtractEnergy(params)) {
    updateEnergyCount(params, false);
    return true;
  } else {
    return false;
  }
}

let dailyGiftTimeout: ReturnType<typeof setTimeout> | null = null;

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
  prepareRun({
    state,
    params,
    type: 'normal',
    onProgress() {
      increaseLevel('normal');
      showSection('mainScreen');
    },
    onRetry() {
      showSection('mainScreen');
    },
  });

  updateMainWallet(state);
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

export function updateMainWallet(state: ReadonlyState) {
  fillWalletEls(state.wallet, el.wallet);
}

export function animateMainWallet(type: keyof typeof el.wallet, start: number, target: number) {
  const walletEl = el.wallet[type];
  animateValue(walletEl, start, target);
}

import { init as initRunScreen, prepareRun, startRun } from './run';
import { initState, readState, resetState } from './state';
import { init as initThree } from './three';
import { formatCurrencyNumber } from './utils';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webglCanvas')!,
  topButtons: document.querySelector<HTMLElement>('#topBar')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
  settingsBtn: document.querySelector<HTMLButtonElement>('#settingsBtn')!,
  endRunScreenOK: document.querySelector('#endRunScreen button.ok')!,
  wallet: {
    gem: document.querySelector('#mainScreenWallet .value.gem')!,
    coin: document.querySelector('#mainScreenWallet .value.coin')!,
  },
  upgradeButtons: document.querySelector<HTMLElement>('#upgradeButtons')!,
  upgrades: {
    player: document.querySelector<HTMLElement>('#upgradeButtons > .player')!,
    rate: document.querySelector<HTMLElement>('#upgradeButtons > .rate')!,
    damage: document.querySelector<HTMLElement>('#upgradeButtons > .damage')!,
  },
};

export function init() {
  initState();
  initThree(el.main);
  initRunScreen();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.endRunScreenOK.addEventListener('click', showMainScreen);
  el.settingsBtn.addEventListener('click', showSettings);

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  showMainScreen();
}

export function startPlaying() {
  if (!el.main.classList.contains('run')) {
    el.main.classList.add('run');
    startRun();
  }
}

export function showMainScreen() {
  el.main.classList.remove('run');
  el.exitBtn.disabled = false;
  prepareRun();

  updateMainScreen();
}

function updateMainScreen() {
  const state = readState();

  const coins = state.wallet.read('coin');
  el.wallet.coin.textContent = formatCurrencyNumber(coins);

  const gems = state.wallet.read('gem');
  el.wallet.gem.textContent = formatCurrencyNumber(gems);

  updatePriceAndLevel(el.upgrades.player, 0, coins >= 0, 1, 1);
  updatePriceAndLevel(el.upgrades.rate, 1, coins >= 1, 10, 100);
  updatePriceAndLevel(el.upgrades.damage, 1, coins >= 1, 1, 100);
}

function updatePriceAndLevel(
  el: HTMLElement,
  price: number,
  canAfford: boolean,
  level: number,
  levelMax: number,
) {
  const disabled = !canAfford || level >= levelMax;
  el.classList.toggle('disabled', disabled);
  el.classList.toggle('unaffordable', !canAfford);

  const costEl = el.querySelector<HTMLElement>('.cost .value')!;
  costEl.textContent = price && !disabled ? formatCurrencyNumber(price) : '—';

  const levelEl = el.querySelector<HTMLElement>('.level .value')!;
  levelEl.textContent = formatCurrencyNumber(level);
}

function showSettings() {
  if (window.confirm('reset all data?')) {
    resetState();
    updateMainScreen();
  }
}

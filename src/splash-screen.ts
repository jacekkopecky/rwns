/**
 * This is the code that controls fullscreen behaviour and the splash screen.
 */

import { fillOrHide, getEl, isDev } from '#utils';

import { warmup } from './run';
import { init as initSections, isSectionActive, showSection } from './sections';

let useFullscreen = true;

if (isDev()) {
  if (window.location.host.includes('localhost')) useFullscreen = false;
}

const el = {
  startBtn: getEl('#startBtn'),
  exitBtn: getEl('#exitBtn'),
  main: getEl('main'),
  version: getEl('#version'),
};

export function init() {
  document.body.classList.toggle('using-fullscreen', useFullscreen);

  initSections();

  if (useFullscreen) {
    document.body.addEventListener('keyup', handleTopLevelSpaceKey);
    el.startBtn.addEventListener('click', goFullscreen);
    el.exitBtn.addEventListener('click', exit);
    el.main.addEventListener('fullscreenchange', updateSplashScreen);
    updateIsOnSplashScreen(true);
  } else {
    // make sure the main screen is up to date
    showSection('mainScreen');
    updateIsOnSplashScreen(false);
  }

  fillOrHide(el.version, (import.meta.env.VITE_BUILD_VERSION ?? 'unknown') as string);

  // disable context menu
  document.addEventListener('contextmenu', (e) => e.preventDefault());
}

async function goFullscreen() {
  warmup();
  await el.main.requestFullscreen();
  if (!isSectionActive('run')) {
    showSection('mainScreen');
  }
}

function exit() {
  void document.exitFullscreen();
}

function handleTopLevelSpaceKey(e: KeyboardEvent): void {
  if (e.key === ' ' && !document.fullscreenElement) {
    void goFullscreen();
  }
}

function updateSplashScreen() {
  el.startBtn.textContent = isSectionActive('run') ? 'Resume' : 'Start';

  updateIsOnSplashScreen(useFullscreen && el.main !== document.fullscreenElement);
  if (isOnSplashScreen() && isSectionActive('dailyGift')) {
    showSection('mainScreen');
  }
}

export function isOnSplashScreen() {
  return useFullscreen && el.main.classList.contains('showingSplashScreen');
}

function updateIsOnSplashScreen(value: boolean) {
  el.main.classList.toggle('showingSplashScreen', value);
}

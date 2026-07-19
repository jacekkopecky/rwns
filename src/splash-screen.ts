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
  startBtn: getEl('#startBtn', HTMLButtonElement),
  exitBtn: getEl('#exitBtn'),
  main: getEl('main'),
  body: getEl('body'),
  version: getEl('#version'),
};

export function init() {
  document.body.classList.toggle('using-fullscreen', useFullscreen);

  initSections();

  updateIsOnSplashScreen(true);

  if (useFullscreen) {
    document.body.addEventListener('keyup', handleTopLevelSpaceKey);
    el.startBtn.addEventListener('click', goFullscreen);
    el.exitBtn.addEventListener('click', exit);
    el.main.addEventListener('fullscreenchange', updateSplashScreen);
  } else {
    // make sure the main screen is up to date
    setTimeout(() => {
      showSection('mainScreen');
      updateIsOnSplashScreen(false);
    }, 1000);
  }

  fillOrHide(el.version, (import.meta.env.VITE_BUILD_VERSION ?? 'unknown') as string);
  el.startBtn.disabled = false;

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
  return useFullscreen && el.body.classList.contains('showingSplashScreen');
}

function updateIsOnSplashScreen(value: boolean) {
  el.body.classList.toggle('showingSplashScreen', value);
}

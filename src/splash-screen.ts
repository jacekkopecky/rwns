/**
 * This is the code that controls fullscreen behaviour and the splash screen.
 */

import { fillOrHide, getEl, isDev, setThemeColor } from '#utils';

import { warmup } from './run';
import {
  init as initSections,
  isSectionActive,
  setCurrentSectionThemeColor,
  showSection,
} from './sections';

let useSplashScreen = true;
if (isDev() && window.location.host.includes('localhost')) useSplashScreen = false;

const version = (import.meta.env.VITE_BUILD_VERSION ?? 'unknown') as string;

const el = {
  startBtn: getEl('#startBtn', HTMLButtonElement),
  exitBtn: getEl('#exitBtn'),
  main: getEl('main'),
  body: getEl('body'),
  version: getEl('#version'),
};

export function init() {
  initSections();

  fillOrHide(el.version, version);
  updateIsOnSplashScreen(true);

  if (useSplashScreen) {
    el.startBtn.addEventListener('click', start);
    el.startBtn.disabled = false;
    el.startBtn.focus();
    el.exitBtn.addEventListener('click', exit);
    el.main.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
  } else {
    // make sure the main screen is up to date
    setTimeout(() => {
      showSection('mainScreen');
      updateIsOnSplashScreen(false);
    }, 1000);
  }

  // disable context menu
  document.addEventListener('contextmenu', (e) => e.preventDefault());
}

async function start() {
  warmup();

  try {
    await el.main.requestFullscreen();
  } catch {
    /* ignore when requesting fullscreen fails */
  }

  updateIsOnSplashScreen(false);
}

async function exit() {
  updateIsOnSplashScreen(true);
  try {
    await document.exitFullscreen();
  } catch {
    // ignore
  }
}

// go to splash screen when user leaves fullscreen
function handleFullscreenChange() {
  el.startBtn.textContent = isSectionActive('run') ? 'Resume' : 'Start';
  if (el.main !== document.fullscreenElement) updateIsOnSplashScreen(true);
}

// go to splash screen when user moves away
function handleVisibilityChange() {
  el.startBtn.textContent = isSectionActive('run') ? 'Resume' : 'Start';
  if (document.visibilityState === 'hidden') updateIsOnSplashScreen(true);
}

export function isOnSplashScreen() {
  return el.body.classList.contains('showingSplashScreen');
}

function updateIsOnSplashScreen(showSplashScreen: boolean) {
  el.body.classList.toggle('showingSplashScreen', showSplashScreen);

  if (showSplashScreen) {
    // return to main screen if we're not in a run
    if (!isSectionActive('run')) {
      showSection('mainScreen');
    }

    // set theme color to normal - main screen
    // the exit button is in the main section
    setThemeColor(el.exitBtn);
  } else {
    // set theme color to what's under the splash screen
    setCurrentSectionThemeColor();
  }
}

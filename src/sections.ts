import { getEl } from '#utils';

import * as cardsScreen from './cards';
import * as dailyGiftScreen from './daily-gift';
import * as mainScreen from './main-screen';
import * as runScreen from './run';
import * as settingsScreen from './settings';
import * as backToBasicsScreen from './side-games/back-to-basics';

export function init() {
  mainScreen.init();
  runScreen.init();
  cardsScreen.init();
  dailyGiftScreen.init();
  settingsScreen.init();
  backToBasicsScreen.init();

  showSection('mainScreen');
}

const el = {
  fadeThrough: getEl('#fadeThrough'),
  fadeThroughMessage: getEl('#fadeThrough .message'),
};

const sections = {
  ...prepSection('mainScreen', mainScreen.showMainScreen, {
    tryStartPlaying: mainScreen.startPlaying,
  }),

  ...prepSection('run', runScreen.showRunSection),

  ...prepSection('cards', cardsScreen.showCardsScreen, {
    alsoKeepVisible: 'mainScreen',
  }),

  ...prepSection('dailyGift', dailyGiftScreen.showDailyGiftScreen, {
    alsoKeepVisible: 'mainScreen',
  }),

  ...prepSection('settings', settingsScreen.showSettingsScreen, {
    alsoKeepVisible: 'mainScreen',
  }),

  ...prepSection('backToBasics', backToBasicsScreen.showBackToBasicsScreen, {
    tryStartPlaying: backToBasicsScreen.startPlaying,
  }),
};

type Section = keyof typeof sections;

export function showSection(name: Section) {
  const selectedSection = sections[name];
  for (const section of Object.values(sections)) {
    section.el.classList.remove('_active');
    section.el.classList.add('inactive');
    section.el.inert = !section.el.classList.contains('no-inert');
  }
  selectedSection.el.classList.add('_active');
  selectedSection.el.classList.remove('inactive');
  selectedSection.el.inert = false;
  selectedSection.cb?.();

  if (selectedSection.alsoKeepVisible && selectedSection.alsoKeepVisible in sections) {
    const extraSection = sections[selectedSection.alsoKeepVisible as keyof typeof sections];
    extraSection.el.classList.remove('inactive');
  }
}

function getSectionEl(name: string) {
  return getEl(`main > section#${name}`);
}

function prepSection<T extends string>(
  name: T,
  cb?: () => void,
  opts?: {
    alsoKeepVisible?: string;
    tryStartPlaying?: () => boolean;
  },
): Record<T, { el: HTMLElement; cb?: () => void } & typeof opts> {
  return {
    [name]: { el: getSectionEl(name), cb, ...opts },
  } as Record<T, { el: HTMLElement; cb?: () => void } & Required<typeof opts>>;
}

export function isSectionActive(sec: Section): boolean {
  return sections[sec].el.classList.contains('_active');
}

function getActiveSection(): (typeof sections)[Section] | undefined {
  return Object.values(sections).find((s) => s.el.classList.contains('_active'));
}

export function startPlaying(): boolean {
  return getActiveSection()?.tryStartPlaying?.() ?? false;
}

export async function fadeTo(sec: Section, message = '') {
  el.fadeThroughMessage.textContent = message;
  el.fadeThrough.classList.add('fading');
  await new Promise((resolve) => setTimeout(resolve, 500));

  showSection(sec);

  await new Promise((resolve) => setTimeout(resolve, message ? 1000 : 500));

  el.fadeThrough.classList.remove('fading');
  await new Promise((resolve) => setTimeout(resolve, 500));
}

import { getEl } from '#utils';

import { init as initCardsScreen, showCardsScreen } from './cards';
import { init as initDailyGiftScreen, showDailyGiftScreen } from './daily-gift';
import { init as initMainScreen, showMainScreen } from './main-screen';
import { init as initSettingsScreen, showSettingsScreen } from './settings';
import { init as initRunScreen, showRunSection } from './run';

export function init() {
  initMainScreen();
  initRunScreen();
  initCardsScreen();
  initDailyGiftScreen();
  initSettingsScreen();
}

const sections = {
  ...prepSection('mainScreen', showMainScreen),
  ...prepSection('run', showRunSection),
  ...prepSection('cards', showCardsScreen),
  ...prepSection('dailyGift', showDailyGiftScreen),
  ...prepSection('settings', showSettingsScreen),
};

type Section = keyof typeof sections;

export function showSection(name: Section) {
  const selectedSection = sections[name];
  for (const section of Object.values(sections)) {
    section.el.classList.add('inactive');
    section.el.inert = true;
  }
  selectedSection.el.classList.remove('inactive');
  selectedSection.el.inert = false;
  selectedSection.cb?.();
}

function getSectionEl(name: string) {
  return getEl(`main > section#${name}`);
}

function prepSection<T extends string>(
  name: T,
  cb?: () => void,
): Record<T, { el: HTMLElement; cb?: () => void }> {
  return { [name]: { el: getSectionEl(name), cb } } as Record<
    T,
    { el: HTMLElement; cb?: () => void }
  >;
}

export function isSectionActive(sec: Section): boolean {
  return !sections[sec].el.classList.contains('inactive');
}

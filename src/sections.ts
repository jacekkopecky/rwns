import { getEl } from '#utils';

import { init as initCardsScreen, showCardsScreen } from './cards';
import { init as initDailyGiftScreen, showDailyGiftScreen } from './daily-gift';
import { init as initMainScreen, showMainScreen } from './main-screen';
import { init as initRunScreen, showRunSection } from './run';
import { init as initSettingsScreen, showSettingsScreen } from './settings';

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
  ...prepSection('cards', showCardsScreen, 'mainScreen'),
  ...prepSection('dailyGift', showDailyGiftScreen, 'mainScreen'),
  ...prepSection('settings', showSettingsScreen, 'mainScreen'),
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

  if (selectedSection.keepVisible && selectedSection.keepVisible in sections) {
    const extraSection = sections[selectedSection.keepVisible as keyof typeof sections];
    extraSection.el.classList.remove('inactive');
  }
}

function getSectionEl(name: string) {
  return getEl(`main > section#${name}`);
}

function prepSection<T extends string>(
  name: T,
  cb?: () => void,
  keepVisible?: string,
): Record<T, { el: HTMLElement; cb?: () => void; keepVisible?: string }> {
  return { [name]: { el: getSectionEl(name), cb, keepVisible } } as Record<
    T,
    { el: HTMLElement; cb?: () => void; keepVisible?: string }
  >;
}

export function isSectionActive(sec: Section): boolean {
  return sections[sec].el.classList.contains('_active');
}

import { getEl } from '#utils';

import { init as initMainScreen, showMainScreen } from './main-screen';
import { init as initCardsScreen, showCardsScreen } from './cards';
import { init as initDailyGiftScreen, showDailyGiftScreen } from './daily-gift';

export function init() {
  initMainScreen();
  initCardsScreen();
  initDailyGiftScreen();
}

const sections = {
  ...prepSection('mainScreen', showMainScreen),
  ...prepSection('cards', showCardsScreen),
  ...prepSection('dailyGift', showDailyGiftScreen),
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

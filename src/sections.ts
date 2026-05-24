import { init as initMainScreen, showMainScreen } from './main-screen';
import { init as initCardsScreen, showCardsScreen } from './cards';
import { getEl } from '#utils';

export function init() {
  initMainScreen();
  initCardsScreen();
}

const sections = {
  ...prepSection('mainScreen', showMainScreen),
  ...prepSection('cards', showCardsScreen),
};

type Section = keyof typeof sections;

export function showSection(name: Section) {
  const selectedSection = sections[name];
  for (const section of Object.values(sections)) {
    section.el.classList.add('inactive');
  }
  selectedSection.el.classList.remove('inactive');
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

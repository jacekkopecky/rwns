import { getEl } from '#utils';

import { prepareRun } from '../../run';
import { showSection } from '../../sections';
import { getUpgradablePermanentParameters, readState } from '../../state';

const el = {
  backToBasicsBtn: getEl('#mainScreen .sectionButtons .backToBasics'),
  closeBtn: getEl('#backToBasics button.close'),
};

export function init() {
  el.backToBasicsBtn.addEventListener('click', () => showSection('backToBasics'));
  el.closeBtn.addEventListener('click', () => showSection('mainScreen'));
}

export function showBackToBasicsScreen() {
  const state = readState();
  const params = getUpgradablePermanentParameters('backToBasics');
  prepareRun(state, params, 'backToBasics');
}

export function startPlaying(): boolean {
  // we can always start this mini-game, if the user got the button to get them to this point
  return true;
}

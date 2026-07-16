import { getEl } from '#utils';

import { prepareRun } from '../../run';
import { isSectionActive, showSection } from '../../sections';
import { getUpgradablePermanentParameters, readState } from '../../state';

const el = {
  canvas: getEl('#webglCanvas'),
  backToBasicsBtn: getEl('#mainScreen .sectionButtons .backToBasics'),
  closeBtn: getEl('#backToBasics button.close'),
};

export function init() {
  el.backToBasicsBtn.addEventListener('click', () => showSection('backToBasics'));
  el.closeBtn.addEventListener('click', () => showSection('mainScreen'));

  el.canvas.addEventListener('touchstart', startPlaying);
  el.canvas.addEventListener('mousedown', startPlaying);
}

export function showBackToBasicsScreen() {
  const state = readState();
  const params = getUpgradablePermanentParameters('backToBasics');
  prepareRun(state, params, 'backToBasics');
}

export function startPlaying() {
  if (isSectionActive('backToBasics')) {
    showSection('run');
  }
}

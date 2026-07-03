import { getEl } from '#utils';

import { showSection } from './sections';
import { readState, resetState } from './state';

const el = {
  settingsBtn: getEl('#settingsBtn', HTMLButtonElement),
  section: getEl('#settings'),
  startDate: getEl('#settings .startDate'),
  resetBtn: getEl('#settings #resetProgressBtn', HTMLButtonElement),
  closeBtn: getEl('#settings .closeBtn', HTMLButtonElement),
};

export function init() {
  el.resetBtn.addEventListener('click', onReset);
  el.closeBtn.addEventListener('click', () => showSection('mainScreen'));

  el.settingsBtn.addEventListener('click', () => showSection('settings'));
}

export function showSettingsScreen() {
  const state = readState();
  el.startDate.textContent = state.startDate;
}

function onReset() {
  if (window.confirm('Reset all progress?')) {
    resetState();
    showSection('mainScreen');
  }
}

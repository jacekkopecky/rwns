import type { ReadonlyState } from '#types';
import { getEl } from '#utils';

import { showSection } from './sections';
import { readState, resetState } from './state';

const el = {
  settingsBtn: getEl('#settingsBtn', HTMLButtonElement),
  startDate: getEl('#settings .startDate'),
  stateJson: getEl('#settings .stateJson'),
  resetBtn: getEl('#settings .resetProgressBtn', HTMLButtonElement),
  closeBtn: getEl('#settings .closeBtn', HTMLButtonElement),
};

export function init() {
  el.settingsBtn.addEventListener('click', () => showSection('settings'));

  el.closeBtn.addEventListener('click', () => showSection('mainScreen'));
  el.resetBtn.addEventListener('click', onReset);
}

export function showSettingsScreen() {
  const state = readState();
  el.startDate.textContent = state.startDate;
  el.stateJson.textContent = JSON.stringify(state, null, 2);
}

function onReset() {
  if (window.confirm('Reset all progress?')) {
    resetState();
    showSection('mainScreen');
  }
}

export function updateSettingsVisibility(state: ReadonlyState) {
  el.settingsBtn.classList.toggle('hidden', state.level <= 1);
}

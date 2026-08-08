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
  copyBtn: getEl('#settings .copyBtn', HTMLButtonElement),
  shareBtn: getEl('#settings .shareBtn', HTMLButtonElement),
};

export function init() {
  el.settingsBtn.addEventListener('click', () => showSection('settings'));

  el.closeBtn.addEventListener('click', () => showSection('mainScreen'));
  el.resetBtn.addEventListener('click', onReset);

  el.copyBtn.addEventListener('click', async () => {
    const text = el.stateJson.textContent;
    await navigator.clipboard.writeText(text);
    el.copyBtn.classList.add('copied');
    setTimeout(() => {
      el.copyBtn.classList.remove('copied');
    }, 1000);
  });

  el.shareBtn.classList.toggle('hidden', typeof navigator.share !== 'function');
  el.shareBtn.addEventListener('click', async () => {
    const text = el.stateJson.textContent;
    const file = new File([text], 'rwns-state.json', { type: 'application/json' });
    let sharedJson = false;
    try {
      if (typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'rwns-state.json' });
        sharedJson = true;
      }
    } catch (e) {
      console.log('error sharing as JSON', e);
    }

    if (!sharedJson) {
      await navigator.share({ text, title: 'rwns-state.json' });
    }
  });
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

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

  el.copyBtn.addEventListener('click', () => {
    const text = el.stateJson.textContent;
    void navigator.clipboard.writeText(text).then(() => {
      el.copyBtn.classList.add('copied');
      setTimeout(() => {
        el.copyBtn.classList.remove('copied');
      }, 1000);
    });
  });

  if (typeof navigator.share !== 'function') {
    el.shareBtn.classList.add('hidden', 'hiddenGone');
  } else {
    el.shareBtn.addEventListener('click', () => {
      const text = el.stateJson.textContent;
      const file = new File([text], 'rwns-state.json', { type: 'application/json' });
      if (typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })) {
        navigator
          .share({
            files: [file],
            title: 'rwns-state.json',
          })
          .catch((err: unknown) => {
            console.error('Error sharing file:', err);
          });
      } else {
        navigator
          .share({
            text,
            title: 'rwns-state.json',
          })
          .catch((err: unknown) => {
            console.error('Error sharing text:', err);
          });
      }
    });
  }
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

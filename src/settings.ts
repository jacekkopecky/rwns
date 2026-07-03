import { getEl } from '#utils';
import { readState, resetState } from './state';

const els = {
  section: getEl('#settings'),
  startDate: getEl('#settings .startDate'),
  resetBtn: getEl('#resetProgressBtn', HTMLButtonElement),
  closeBtn: getEl('#settings .sectionButtons .close', HTMLButtonElement),
};

export function init() {
  els.resetBtn.addEventListener('click', onReset);
  els.closeBtn.addEventListener('click', () => showMainScreenSection());
}

export function showSettingsScreen() {
  const state = readState();
  els.startDate.textContent = String(state.startDate ?? '-');
}

function onReset() {
  if (window.confirm('Reset all progress?')) {
    resetState();
    showMainScreenSection();
  }
}

function showMainScreenSection() {
  const sections = document.querySelectorAll('main > section');
  sections.forEach((s) => {
    (s as HTMLElement).classList.add('inactive');
    (s as any).inert = true;
  });
  const main = document.querySelector('main > section#mainScreen') as HTMLElement;
  main.classList.remove('inactive');
  (main as any).inert = false;
}

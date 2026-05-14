import { showSection } from '../sections';

const el = {
  goToCardsSectionButton: document.querySelector('#mainScreen .sectionButtons .cards')!,
  closeCardsSectionButton: document.querySelector('#cards button.close')!,
};

export function init() {
  el.goToCardsSectionButton.addEventListener('click', () => showSection('cards'));
  el.closeCardsSectionButton.addEventListener('click', () => showSection('mainScreen'));
}

// on show (add a callback to sections.ts):
// enable/disable the buy buttons depending on wallet
// use isFeatureAllowed for bulk card buying
// update prices on buttons
// update shown cards from state

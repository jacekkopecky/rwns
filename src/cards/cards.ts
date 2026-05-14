import { showSection } from '../sections';

const el = {
  goToCardsSectionButton: document.querySelector('#sectionButtons .cards')!,
  closeCardsSectionButton: document.querySelector('#cards button.close')!,
};

export function init() {
  el.goToCardsSectionButton.addEventListener('click', () => showSection('cards'));
  el.closeCardsSectionButton.addEventListener('click', () => showSection('mainScreen'));
}

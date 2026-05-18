import type { ReadonlyState } from '#types';
import { formatNumber, makeEl } from '#utils';

import * as dim from '#dimensions';

import { showSection } from '../sections';
import { getUpgradablePermanentParameters, isFeatureAllowed, readState } from '../state';

import { getCardLevel } from './levels';
import { cardDefinitions, CARDS } from './types';

const el = {
  goToCardsSectionButton: document.querySelector('#mainScreen .sectionButtons .cards')!,
  closeCardsSectionButton: document.querySelector('#cards button.close')!,
  buyOne: document.querySelector('#cards button.buyOne')!,
  buyBulk: document.querySelector('#cards button.buyBulk')!,
  theCards: document.querySelector('#cards .theCards')!,
};

export function init() {
  el.goToCardsSectionButton.addEventListener('click', () => showSection('cards'));
  el.closeCardsSectionButton.addEventListener('click', () => showSection('mainScreen'));
}

export function showCardsScreen() {
  const state = readState();
  const params = getUpgradablePermanentParameters();

  updateButtonPriceAndAmount(el.buyOne, dim.cardPriceGems, 1, state);
  updateButtonPriceAndAmount(
    el.buyBulk,
    dim.cardPriceGems * dim.cardBulkCount * params.cardsBulkBuyingRate,
    dim.cardBulkCount,
    state,
  );
  el.buyBulk.classList.toggle('hidden', !isFeatureAllowed('bulkCards', state));

  // clear out previous cards
  el.theCards.textContent = '';

  for (const cardType of CARDS) {
    const defn = cardDefinitions[cardType];
    const cardData = getCardLevel(cardType, state.cards, defn.cardsToGive);
    if (cardData.level > 0) {
      const cardEl = makeEl(el.theCards, 'div', 'card');
      cardEl.classList.add(defn.rarity);
      makeEl(cardEl, 'div', 'rarity', defn.rarity);
      const nameEl = makeEl(cardEl, 'div', 'name', defn.name);
      makeEl(nameEl, 'span', 'level', ' ' + String(cardData.level));
      makeEl(cardEl, 'div', 'label', defn.typeLabel);
      if (cardData.nextLevelCards > 0) {
        const nextEl = makeEl(cardEl, 'div', 'nextLevel');
        const boxEl = makeEl(nextEl, 'span', 'box');
        const partBox = makeEl(boxEl, 'span', 'partBox');
        makeEl(nextEl, 'span', 'have', String(cardData.nextLevelCardsHave));
        makeEl(nextEl, 'span', 'outOf', String(cardData.nextLevelCards));
        partBox.style.width = `${(cardData.nextLevelCardsHave / cardData.nextLevelCards) * 100}%`;
      } else {
        makeEl(cardEl, 'div', 'nextLevel max');
      }
    }
  }
}

function updateButtonPriceAndAmount(
  buttonEl: Element,
  price: number,
  amount: number,
  state: ReadonlyState,
) {
  const canAfford = state.wallet.read('gem') >= price;

  buttonEl.classList.toggle('disabled', !canAfford);
  buttonEl.classList.toggle('unaffordable', !canAfford);

  const costEl = buttonEl.querySelector<HTMLElement>('.cost')!;
  costEl.textContent = formatNumber(price);

  const amountEl = buttonEl.querySelector<HTMLElement>('.amount')!;
  amountEl.textContent = formatNumber(amount);
}

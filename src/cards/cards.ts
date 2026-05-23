import * as dim from '#dimensions';
import type { CardType, ReadonlyState } from '#types';
import { fillOrHide, formatNumber, getEl, makeEl, toggleHidden } from '#utils';

import { showSection } from '../sections';
import {
  addCards,
  getUpgradablePermanentParameters,
  isFeatureAllowed,
  pay,
  readState,
} from '../state';

import { getCardLevel } from './levels';
import { cardDefinitions, CARDS, RARITIES } from './types';
import { selectNextRandomCard } from './next-card';

const el = {
  goToCardsSectionButton: getEl('#mainScreen .sectionButtons .cards'),
  closeCardsSectionButton: getEl('#cards button.close'),
  buyOne: getEl('#cards button.buyOne'),
  buyBulk: getEl('#cards button.buyBulk'),
  theCards: getEl('#cards .theCards'),
  walletContainer: getEl('#cards .wallet'),
  wallet: {
    gem: getEl('#cards .wallet .gem'),
    coin: getEl('#cards .wallet .coin'),
  },
};

export function init() {
  el.goToCardsSectionButton.addEventListener('click', () => showSection('cards'));
  el.closeCardsSectionButton.addEventListener('click', () => showSection('mainScreen'));

  el.buyOne.addEventListener('click', buyOne);
  el.buyBulk.addEventListener('click', buyBulk);
}

export function updateCardsVisibility(state: ReadonlyState) {
  toggleHidden(el.goToCardsSectionButton, !isFeatureAllowed('cards', state));
}

export function showCardsScreen(
  highlightLevel?: Set<CardType>,
  highlightProgressToNext?: Set<CardType>,
) {
  const state = readState();
  const params = getUpgradablePermanentParameters();

  // show wallet
  fillOrHide(el.wallet.coin, state.wallet.read('coin'));
  // always show even 0 for gems
  fillOrHide(el.wallet.gem, String(state.wallet.read('gem')));

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

  const cardsToRender = CARDS.map((cardType) => ({
    cardType,
    cardsHave: state.cards.read(cardType),
    definition: cardDefinitions[cardType],
    cardData: getCardLevel(cardType, state.cards, cardDefinitions[cardType].cardsToGive),
  }))
    .filter(({ cardsHave }) => cardsHave > 0)
    .sort((a, b) => {
      // reverse order of rarity, then reverse order of how many cards we have
      const rarityDiff =
        RARITIES.indexOf(b.definition.rarity) - RARITIES.indexOf(a.definition.rarity);
      return rarityDiff !== 0 ? rarityDiff : b.cardsHave - a.cardsHave;
    });

  let firstHighlightedCard: Element | undefined;

  for (const { cardType, definition, cardData } of cardsToRender) {
    const cardEl = makeEl(el.theCards, 'div', 'card');
    if (highlightLevel?.has(cardType) || highlightProgressToNext?.has(cardType)) {
      firstHighlightedCard ??= cardEl;
    }

    cardEl.classList.add(toCssClass('rarity', definition.rarity));
    cardEl.classList.add(toCssClass('type', definition.typeLabel));

    makeEl(cardEl, 'div', 'rarity', definition.rarity);

    const nameEl = makeEl(cardEl, 'div', 'name', definition.name);
    nameEl.append(' ');
    makeEl(nameEl, 'span', 'level', String(cardData.level));
    nameEl.classList.toggle('highlight', Boolean(highlightLevel?.has(cardType)));

    makeEl(cardEl, 'div', 'label', definition.typeLabel);

    if (cardData.nextLevelCards > 0) {
      const nextEl = makeEl(cardEl, 'div', 'nextLevel');
      nextEl.classList.toggle('highlight', Boolean(highlightProgressToNext?.has(cardType)));

      const boxEl = makeEl(nextEl, 'span', 'box');
      const partBox = makeEl(boxEl, 'span', 'partBox');
      makeEl(nextEl, 'span', 'have', String(cardData.nextLevelCardsHave));
      makeEl(nextEl, 'span', 'outOf', String(cardData.nextLevelCards));
      partBox.style.width = `${(cardData.nextLevelCardsHave / cardData.nextLevelCards) * 100}%`;
    } else {
      makeEl(cardEl, 'div', 'nextLevel max');
    }
  }

  if (firstHighlightedCard) {
    // scroll the first highlighted card into view
    setTimeout(
      () => firstHighlightedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
      1,
    );
  }
}

function toCssClass(prefix: string, s: string) {
  return `${prefix}-${s.replaceAll(/\s+/g, '-')}`;
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

function buyOne() {
  const state = readState();
  if (state.wallet.read('gem') < dim.cardPriceGems) {
    // cannot afford, how was the button clicked?
    return;
  }

  const cardType = selectNextRandomCard(state);
  if (!cardType) {
    // no card available
    return;
  }

  const definition = cardDefinitions[cardType];

  // get the level before we buy the card
  const { nextLevelCards, nextLevelCardsHave } = getCardLevel(
    cardType,
    state.cards,
    definition.cardsToGive,
  );

  // buy it
  pay('gem', dim.cardPriceGems);
  addCards([cardType]);

  const levelingUp = !(nextLevelCards - nextLevelCardsHave > 1);
  if (levelingUp && definition.onLevelUp) definition.onLevelUp();

  const levelHighlights = new Set<CardType>();
  const nextProgressHighlights = new Set<CardType>();

  const setToAdd = levelingUp ? levelHighlights : nextProgressHighlights;
  setToAdd.add(cardType);

  // update the screen and show cards, highlighting that which just got a new one
  showCardsScreen(levelHighlights, nextProgressHighlights);
}

function buyBulk() {
  console.warn('bulk buying not implemented yet');
}

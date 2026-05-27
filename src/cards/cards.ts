import * as dim from '#dimensions';
import type { CardType, ReadonlyState } from '#types';
import { fillWalletEls, formatNumber, getEl, makeEl, toggleHidden, toggleTwoClasses } from '#utils';

import { showSection } from '../sections';
import {
  addCards,
  getUpgradablePermanentParameters,
  isFeatureAllowed,
  pay,
  readState,
} from '../state';

import { getCardLevel, type CardLevelData } from './levels';
import { cardDefinitions, CARDS, RARITIES, type CardDefinition } from './types';
import { selectNextRandomCard } from './next-card';

const el = {
  cardsSection: getEl('#cards'),
  goToCardsSectionButton: getEl('#mainScreen .sectionButtons .cards'),
  closeCardsSectionButton: getEl('#cards button.close'),
  buyOne: getEl('#cards button.buyOne'),
  buyBulk: getEl('#cards button.buyBulk'),
  theCards: getEl('#cards .theCards'),
  walletContainer: getEl('#cards .wallet'),
  wallet: {
    gem: getEl('#cards .wallet .gem'),
    coin: getEl('#cards .wallet .coin'),
    card: getEl('#cards .wallet .card'),
  },
};

export function init() {
  el.goToCardsSectionButton.addEventListener('click', () => showSection('cards'));
  el.closeCardsSectionButton.addEventListener('click', () => {
    removeAllShowingCards();
    showSection('mainScreen');
  });

  el.buyOne.addEventListener('click', buyOne);
  el.buyBulk.addEventListener('click', buyBulk);
}

export function updateCardsVisibility(state: ReadonlyState) {
  toggleHidden(el.goToCardsSectionButton, !isFeatureAllowed('cards', state));
}

export function showCardsScreen() {
  removeAllShowingCards(true);
  updateCardsScreen();
}

export function updateCardsScreen(
  levelHighlights?: Set<CardType>,
  progressHighlights?: Set<CardType>,
) {
  const state = readState();
  const params = getUpgradablePermanentParameters();

  fillWalletEls(state.wallet, el.wallet);

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

  removeAllShowingCards();
  for (const { cardType, definition, cardData } of cardsToRender) {
    const highlightLevel = Boolean(levelHighlights?.has(cardType));
    const highlightProgress = Boolean(progressHighlights?.has(cardType));

    const cardEl = makeCardEl(definition, cardData, highlightLevel, highlightProgress);
    el.theCards.append(cardEl);

    if (highlightLevel || highlightProgress) {
      firstHighlightedCard ??= cardEl;
      addShowingCard(cardEl);
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

function addShowingCard(cardEl: HTMLElement) {
  const showCardEl = cardEl.cloneNode(true) as HTMLElement;
  showCardEl.classList.add('showingNewCard');
  el.cardsSection.append(showCardEl);

  showCardEl.addEventListener('click', () => removeShowingCard(showCardEl));
}

function removeShowingCard(cardEl: HTMLElement) {
  cardEl.classList.add('hiding');
  cardEl.inert = true;
  setTimeout(() => cardEl.remove(), 1000);
}

function removeAllShowingCards(immediate = false) {
  el.cardsSection
    .querySelectorAll<HTMLElement>('.showingNewCard:not(.hiding)')
    .forEach((cardEl) => (immediate ? cardEl.remove() : removeShowingCard(cardEl)));
}

function makeCardEl(
  definition: CardDefinition,
  cardData: CardLevelData,
  highlightLevel: boolean,
  highlightProgress: boolean,
) {
  const cardEl = makeEl(undefined, 'div', 'bigCard');

  cardEl.classList.add(toCssClass('rarity', definition.rarity));
  cardEl.classList.add(toCssClass('type', definition.typeLabel));

  makeEl(cardEl, 'div', 'rarity', definition.rarity);

  const nameEl = makeEl(cardEl, 'div', 'name', definition.name);
  nameEl.append(' ');
  makeEl(nameEl, 'span', 'level', String(cardData.level));
  nameEl.classList.toggle('highlight', highlightLevel);

  makeEl(cardEl, 'div', 'label', definition.typeLabel);

  makeEl(cardEl, 'div', 'description', definition.description);

  if (cardData.nextLevelCards > 0) {
    const nextEl = makeEl(cardEl, 'div', 'nextLevel');
    nextEl.classList.toggle('highlight', highlightProgress);

    const boxEl = makeEl(nextEl, 'span', 'box');
    const partBox = makeEl(boxEl, 'span', 'partBox');
    makeEl(nextEl, 'span', 'have', String(cardData.nextLevelCardsHave));
    makeEl(nextEl, 'span', 'outOf', String(cardData.nextLevelCards));
    partBox.style.width = `${(cardData.nextLevelCardsHave / cardData.nextLevelCards) * 100}%`;
  } else {
    makeEl(cardEl, 'div', 'nextLevel max');
  }

  return cardEl;
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
  const canUseCardFromWallet = amount === 1 && state.wallet.read('card') >= 1;
  const canAfford = canUseCardFromWallet || state.wallet.read('gem') >= price;

  buttonEl.classList.toggle('disabled', !canAfford);
  buttonEl.classList.toggle('unaffordable', !canAfford);

  const costEl = buttonEl.querySelector<HTMLElement>('.cost')!;
  costEl.textContent = formatNumber(canUseCardFromWallet ? 1 : price);
  toggleTwoClasses(costEl, 'card', 'gem', canUseCardFromWallet);

  const amountEl = buttonEl.querySelector<HTMLElement>('.amount')!;
  amountEl.textContent = formatNumber(amount);
}

function buyOne() {
  const state = readState();

  const canUseCardFromWallet = state.wallet.read('card') >= 1;

  if (!canUseCardFromWallet && state.wallet.read('gem') < dim.cardPriceGems) {
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
  if (canUseCardFromWallet) {
    pay('card', 1);
  } else {
    pay('gem', dim.cardPriceGems);
  }
  addCards([cardType]);

  const levelingUp = !(nextLevelCards - nextLevelCardsHave > 1);
  if (levelingUp && definition.onLevelUp) definition.onLevelUp();

  const levelHighlights = new Set<CardType>();
  const nextProgressHighlights = new Set<CardType>();

  const setToAdd = levelingUp ? levelHighlights : nextProgressHighlights;
  setToAdd.add(cardType);

  // update the screen and show cards, highlighting that which just got a new one
  updateCardsScreen(levelHighlights, nextProgressHighlights);
}

function buyBulk() {
  console.warn('bulk buying not implemented yet');
}

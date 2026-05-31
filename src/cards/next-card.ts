import { CARDS, type CardType, type ReadonlyState } from '#types';
import { pickMapWeightedItem, randomItem } from '#utils';

import { cardDefinitions, type Rarity } from './types';

const rarityFactors: Readonly<Record<Rarity, number>> = {
  common: 96,
  rare: 12,
  epic: 3,
  legendary: 1,
};

export function selectNextRandomCard(state: ReadonlyState): CardType | undefined {
  const availableTypes = CARDS.filter((type) => isTypeAvailable(state, type));
  if (availableTypes.length <= 1) return availableTypes[0];

  const availableRarities = [...new Set(availableTypes.map((t) => cardDefinitions[t].rarity))];
  const selectedRarity = pickMapWeightedItem(availableRarities, rarityFactors, Math.random);

  const typesAtRarity = availableTypes.filter((t) => cardDefinitions[t].rarity === selectedRarity);

  return randomItem(typesAtRarity, Math.random);
}

function isTypeAvailable(state: ReadonlyState, type: CardType) {
  const defn = cardDefinitions[type];
  return state.level >= defn.minPlayerLevel && state.cards.read(type) < defn.cardsToGive;
}

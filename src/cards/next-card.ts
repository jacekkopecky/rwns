import { CARDS, type CardType, type ReadonlyState } from '#types';
import { pickWeightedItem } from '#utils';

import { cardDefinitions, type Rarity } from './types';

const rarityFactors: Readonly<Record<Rarity, number>> = {
  common: 27,
  rare: 9,
  epic: 3,
  legendary: 1,
};

export function selectNextRandomCard(state: ReadonlyState): CardType | undefined {
  const availableTypes = CARDS.filter((type) => isTypeAvailable(state, type));
  if (availableTypes.length <= 1) return availableTypes[0];

  const weightedTypes = availableTypes.map((type) => ({
    value: type,
    weight: rarityFactors[cardDefinitions[type].rarity],
  }));

  return pickWeightedItem(weightedTypes, Math.random);
}

function isTypeAvailable(state: ReadonlyState, type: CardType) {
  const defn = cardDefinitions[type];
  return state.level >= defn.minPlayerLevel && state.cards.read(type) < defn.cardsToGive;
}

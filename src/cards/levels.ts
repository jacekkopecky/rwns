import type { CardType, ReadonlyWallet } from '#types';

// cache the cards-for-a-level computations
const levelToCardsRequired: number[] = [0];
const cardsToLevel: number[] = [0];
const nextLevelCards = generateCardsForLevel();

function* generateCardsForLevel() {
  let n = 1;
  while (true) {
    for (let i = 0; i < n; i++) {
      yield n;
    }
    n += 1;
  }
}

function addLevel() {
  const levelCards = nextLevelCards.next().value!;
  levelToCardsRequired.push(levelToCardsRequired.at(-1)! + levelCards);
  const lastLevel = cardsToLevel.at(-1)!;
  for (let i = 0; i < levelCards - 1; i += 1) {
    cardsToLevel.push(lastLevel);
  }
  cardsToLevel.push(lastLevel + 1);
}

export function getCardsToLevel(level: number): number {
  // make sure there are enough numbers in the array
  while (level >= levelToCardsRequired.length) {
    addLevel();
  }

  return levelToCardsRequired[level]!;
}

export function getCardsToLevelAndNext(level: number): [number, number] {
  const toNext = getCardsToLevel(level + 1);
  return [levelToCardsRequired[level]!, toNext];
}

export function lookupLevelByNumberOfCards(n: number): number {
  while (cardsToLevel.length < n + 1) {
    addLevel();
  }

  return cardsToLevel[n]!;
}

export const _test = {
  levelToCardsRequired,
  cardsToLevel,
};

export interface CardLevelData {
  type: string;
  level: number;
  nextLevelCards: number;
  nextLevelCardsHave: number;
}

export function getCardLevel(
  type: CardType,
  wallet: ReadonlyWallet<CardType>,
  cardsToGive: number,
): CardLevelData {
  const amount = wallet.read(type);
  if (!amount) {
    return {
      type,
      level: 0,
      nextLevelCards: 1,
      nextLevelCardsHave: 0,
    };
  }

  const level = lookupLevelByNumberOfCards(amount);

  if (amount >= cardsToGive) {
    return {
      type,
      level,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    };
  }

  const [cardsToCurrentLevel, cardsToNextLevel] = getCardsToLevelAndNext(level);

  return {
    type,
    level,
    nextLevelCards: cardsToNextLevel - cardsToCurrentLevel,
    nextLevelCardsHave: amount - cardsToCurrentLevel,
  };
}

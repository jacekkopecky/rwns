import { describe, it, expect } from 'vitest';

import type { Wallet, CardType } from '#types';

import { _test, getCardLevel, getCardsToLevel, lookupLevelByNumberOfCards } from './levels';

describe('getCardsToLevel', () => {
  it('should work', () => {
    // a few numbers that are used in various places
    expect(getCardsToLevel(5)).toEqual(11);
    expect(getCardsToLevel(10)).toEqual(30);
    expect(getCardsToLevel(11)).toEqual(35);
    expect(getCardsToLevel(12)).toEqual(40);
    expect(getCardsToLevel(13)).toEqual(45);
    expect(getCardsToLevel(20)).toEqual(85);

    // test the insides
    expect(_test.levelToCardsRequired.slice(0, 6)).toEqual([0, 1, 3, 5, 8, 11]);
  });
});

describe('lookupLevelByNumberOfCards', () => {
  it('should work', () => {
    expect(lookupLevelByNumberOfCards(11)).toBe(5);
    expect(lookupLevelByNumberOfCards(100)).toBe(22);

    // test the insides
    expect(_test.levelToCardsRequired.slice(0, 24)).toEqual([
      // 1  2  3  4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22   23
      0, 1, 3, 5, 8, 11, 14, 18, 22, 26, 30, 35, 40, 45, 50, 55, 61, 67, 73, 79, 85, 91, 98, 105,
    ]);
    expect(_test.cardsToLevel.slice(0, 27)).toEqual([
      0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9,
    ]);
  });
});

describe('getCardLevel', () => {
  it('should work', () => {
    expect(getCardLevel('_test', mockWallet(10), Infinity)).toEqual({
      type: '_test',
      level: 4,
      nextLevelCards: 3,
      nextLevelCardsHave: 2,
    });

    expect(getCardLevel('_test', mockWallet(11), Infinity)).toEqual({
      type: '_test',
      level: 5,
      nextLevelCards: 3,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(12), Infinity)).toEqual({
      type: '_test',
      level: 5,
      nextLevelCards: 3,
      nextLevelCardsHave: 1,
    });
  });

  it("should clamp at _test card's limit of 40 cards (level 12)", () => {
    expect(getCardLevel('_test', mockWallet(39), 40)).toEqual({
      type: '_test',
      level: 11,
      nextLevelCards: 5,
      nextLevelCardsHave: 4,
    });

    expect(getCardLevel('_test', mockWallet(40), 40)).toEqual({
      type: '_test',
      level: 12,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(41), 40)).toEqual({
      type: '_test',
      level: 12,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(100), 40)).toEqual({
      type: '_test',
      level: 22,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });

    expect(getCardLevel('_test', mockWallet(101), 40)).toEqual({
      type: '_test',
      level: 22,
      nextLevelCards: 0,
      nextLevelCardsHave: 0,
    });
  });
});

function mockWallet(n: number) {
  return {
    read: () => n,
  } as unknown as Wallet<CardType>;
}

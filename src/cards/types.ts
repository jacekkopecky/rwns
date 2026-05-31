import type { UpgradablePermanentParameters } from '#types';
import * as dim from '#dimensions';

import { getCardsToLevel } from './levels';
import * as t from './templates';

export const RARITIES = ['common', 'rare', 'epic', 'legendary'] as const;
export type Rarity = (typeof RARITIES)[number];

// short label for card types
type TypeLabel =
  // add new ones to the CSS as well
  'damage' | 'fire rate' | 'range' | 'income' | 'energy' | 'max dmg' | 'max rate' | 'troops';

export type CardDefinition = Readonly<{
  name: string; // funny name
  rarity: Rarity;
  minPlayerLevel: number;
  cardsToGive: number; // it can be Infinity
  typeLabel: TypeLabel;
  description: string;
  // picture?: string; // url
  // this function will give the card's effect
  performUpgrade(level: number, params: UpgradablePermanentParameters): void;
  // this function will be called every time this card levels up
  onLevelUp?(): void;
}>;

export type CardTemplate = Omit<
  CardDefinition,
  'name' | 'rarity' | 'minPlayerLevel' | 'cardsToGive'
>;

// prettier-ignore
export const cardDefinitions = {
  _test: card({
    cardsToGive: 40, // level 12
    minPlayerLevel: Infinity, // make sure the card is never awarded
    name: 'testing card',
    description: 'testing card',
    rarity: 'common', // doesn't matter
    typeLabel: 'fire rate', // doesn't matter
    performUpgrade() {
      console.error("this should never be called, it's a testing card");
    },
  }),
  range1:    tCard( 25, 'Atlatl          ', t.range,                                    ),
  range2:    tCard(100, 'Longbow         ', t.range,                                    ),
  range3:    tCard(200, 'Sniper Rifle    ', t.range,                                    ),
  rate1:     tCard( 25, 'Mucho Practice  ', t.rate,                                     ),
  rate2:     tCard(100, 'Reload Bot      ', t.rate,                                     ),
  rate3:     tCard(200, 'Gatling Gun     ', t.rate,                                     ),
  damage1:   tCard( 50, 'Sharp Rock      ', t.damage,                                   ),
  damage2:   tCard(100, 'Heavy Bullet    ', t.damage,                                   ),
  damage3:   tCard(150, 'Pome Grenade    ', t.damage,                                   ),
  coins1:    tCard( 25, 'Gold Nugget     ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins2:    tCard( 60, 'Pay Raisin      ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins3:    tCard(100, '1337 Loot       ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins4:    tCard(140, 'RwnsCoin        ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins5:    tCard(180, 'Inflation       ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  endCoins1: tCard( 25, 'Harvest         ', t.endBlockCoins, dim.coinCardMaxLevel       ),
  endCoins2: tCard( 60, 'Treasure Chest  ', t.endBlockCoins, dim.coinCardMaxLevel       ),
  endCoins3: tCard(100, 'Pot of Gold     ', t.endBlockCoins, dim.coinCardMaxLevel       ),

  energy1:   tRare( 42, 'Electron Boost  ', t.energy,        24 - dim.initialEnergyMax  ),
  startDmg:  tRare( 50, 'Porridge Brekkie', t.startDamage,   dim.initialDamageMaxUpgrade),
  startRate: tRare( 50, 'Morning Coffee  ', t.startRate,     dim.initialRateMaxUpgrade  ),

  maxDmg:    tEpic( 42, 'Steroids        ', t.maxDamage,     dim.upgradeMaxCardMaxLevel ),
  maxRate:   tEpic( 42, 'Machine Oil     ', t.maxRate,       dim.upgradeMaxCardMaxLevel ),

  troop1: tLegendary(50, 'Good Friends   ', t.startPlayers,  dim.upgradeMaxCardMaxLevel ),
  troop2: tLegendary(99, 'Popularity Pill', t.maxPlayers,    dim.upgradeMaxCardMaxLevel ),
} as const;

// interaction between levels and cards (back-of-the-envelope counting)
// 25 - first batch of cards available
// normal gem income is about 1-2 cards per level, a 10-level card takes 30, a 20-level card takes 85
// 24 energy, with maybe 1.5 gems per run, is about 6-7 cards a day
// we'll have about 5 common coins available initially, so we need 5*(between 30 and 85)/(between 1 and 4) levels to max them out
// about 100 levels to max out cards, so new cards should come around 100-level increments

// todo cards
//   - rare:
//     - number of colour gates in a run? (max level 3)
//     - (?) decrease normal object (e.g. tree) HP (? or this might be a skill later)
//     - (?) decrease end block HP (? or this might be a skill later)
//     - increase gems per level by one, gems in end blocks plus one
//       - Emerald, ruby, sapphire; diamond, smoky quartz, obsidian - add adjectives
//   - epic:
//     - decrease price of damage upgrade (by a fraction, at least 1, but min price 1?)
//     - decrease price of rate upgrade (by a fraction, at least 1, but min price 1?)
//     - decrease price of player upgrade (by a fraction, at least 1, but min price 1?)
//     - increase gems extra per run by one (or this could be a skill?)

export const CARDS = Object.keys(cardDefinitions) as (keyof typeof cardDefinitions)[];

export const minLevelForCards = Math.min(
  ...Object.values(cardDefinitions).map((card) => card.minPlayerLevel),
);

// makes it simpler to type-check the creation of cardDefinitions
function card(defn: CardDefinition): CardDefinition {
  return defn;
}

function tCard(
  minPlayerLevel: number,
  name: string,
  template: CardTemplate,
  maxLevel = dim.cardDefaultMaxLevel,
  rarity: Rarity = 'common',
): CardDefinition {
  return {
    ...template,
    rarity,
    cardsToGive: getCardsToLevel(maxLevel),
    name: name.trim(),
    minPlayerLevel,
  };
}

function tRare(...[min, name, tmpl, max]: Parameters<typeof tCard>) {
  return tCard(min, name, tmpl, max, 'rare');
}

function tEpic(...[min, name, tmpl, max]: Parameters<typeof tCard>) {
  return tCard(min, name, tmpl, max, 'epic');
}

function tLegendary(...[min, name, tmpl, max]: Parameters<typeof tCard>) {
  return tCard(min, name, tmpl, max, 'legendary');
}

import * as dim from '#dimensions';
import type { UpgradablePermanentParameters } from '#types';

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
  range2:    tCard(125, 'Longbow         ', t.range,                                    ),
  range3:    tCard(225, 'Sniper Rifle    ', t.range,                                    ),
  rate1:     tCard( 25, 'Mucho Practice  ', t.rate,                                     ),
  rate2:     tCard(125, 'Reload Bot      ', t.rate,                                     ),
  rate3:     tCard(225, 'Gatling Gun     ', t.rate,                                     ),
  damage1:   tCard( 50, 'Sharp Rock      ', t.damage,                                   ),
  damage2:   tCard(150, 'Heavy Bullet    ', t.damage,                                   ),
  damage3:   tCard(250, 'Pome Grenade    ', t.damage,                                   ),
  coins1:    tCard( 25, 'Gold Nugget     ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins2:    tCard( 80, 'Pay Raisin      ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins3:    tCard(140, '1337 Loot       ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins4:    tCard(200, '13th Month Pay  ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  coins5:    tCard(260, 'Inflation       ', t.inRunCoins,    dim.coinCardMaxLevel       ),
  endCoins1: tCard( 25, 'Harvest         ', t.endBlockCoins, dim.coinCardMaxLevel       ),
  endCoins2: tCard( 80, 'Treasure Chest  ', t.endBlockCoins, dim.coinCardMaxLevel       ),
  endCoins3: tCard(140, 'Pot of Gold     ', t.endBlockCoins, dim.coinCardMaxLevel       ),
  endCoins4: tCard(200, 'Gold Vain       ', t.endBlockCoins, dim.coinCardMaxLevel       ),
  endCoins5: tCard(260, 'Precious Granite', t.endBlockCoins, dim.coinCardMaxLevel       ),

  energy1:   tRare( 42, 'Electron Boost  ', t.energy,        24 - dim.initialEnergyMax  ),
  maxDmg:    tRare( 42, 'Steroids        ', t.maxDamage,     dim.upgradeMaxCardMaxLevel ),
  maxRate:   tRare( 42, 'Machine Oil     ', t.maxRate,       dim.upgradeMaxCardMaxLevel ),
  coinsR1:   tRare( 60, 'RwnsCoin        ', t.inRunCoinsR,   dim.coinCardMaxLevel       ),
  endCoinsR1:tRare( 60, 'Gold-rich Basalt', t.endBlockCoinsR,dim.coinCardMaxLevel       ),

  startDmg:  tEpic( 50, 'Porridge Brekkie', t.startDamage,   dim.initialDamageMaxUpgrade),
  startRate: tEpic( 50, 'Morning Coffee  ', t.startRate,     dim.initialRateMaxUpgrade  ),
  gems1:     tEpic( 60, 'Shiny Mine-y    ', t.gemsPerLevel,  dim.gemCardMaxLevel        ), // might become a skill

  troop1: tLegendary(50, 'Good Friends   ', t.startPlayers,  dim.upgradeMaxCardMaxLevel ),
  troop2: tLegendary(99, 'Popularity Pill', t.maxPlayers,    dim.upgradeMaxCardMaxLevel ),
} as const;

// todo cards
//   - rare:
//     - number of colour gates in a run? (max level 3)
//     - (?) decrease normal object (e.g. tree) HP (? or this might be a skill later)
//     - (?) decrease end block HP (? or this might be a skill later)
//   - rare or epic, or a skill (negotiation)
//     - decrease price of damage upgrade (by 1 or a fraction, at least 1, but min price 1?)
//     - decrease price of rate upgrade (by 1 or a fraction, at least 1, but min price 1?)
//   - epic
//     - decrease price of player upgrade (by 2 or a fraction, at least 1, but min price 1?)
//   - legendary
//     - sapphire hail makes it possible to get a level where all trees become gems (every n-th level?)
//       - on leveling, it makes your current level like that

export const CARDS = Object.keys(cardDefinitions) as (keyof typeof cardDefinitions)[];

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

import type {
  RunUpgradeLevels,
  ReadonlyState,
  RunUpgradeType,
  UpgradablePermanentParameters,
} from '#types';
import { RUN_UPGRADE_TYPES } from '#types';
import { parseNumber, formatNumber } from '#utils';

import { updateMainScreen } from './main-screen';
import { prepareRun } from './run';
import {
  readState,
  pay,
  isFeatureAllowed,
  getUpgradablePermanentParameters,
  setRunUpgradeLevel,
} from './state';

const el = {
  upgradeButtons: document.querySelector<HTMLElement>('#upgradeButtons')!,
  upgrades: {
    players: document.querySelector<HTMLElement>('#upgradeButtons > .players')!,
    rate: document.querySelector<HTMLElement>('#upgradeButtons > .rate')!,
    damage: document.querySelector<HTMLElement>('#upgradeButtons > .damage')!,
  },
};

export function initUpgrades() {
  el.upgrades.players.addEventListener('click', upgradeHandler('players'));
  el.upgrades.rate.addEventListener('click', upgradeHandler('rate'));
  el.upgrades.damage.addEventListener('click', upgradeHandler('damage'));
}

type ButtonUpgrade = keyof typeof el.upgrades;

export function updateUpgrades(state: ReadonlyState, params: UpgradablePermanentParameters) {
  // only allow upgrades depending on state
  for (const upgradeType of Object.keys(el.upgrades) as ButtonUpgrade[]) {
    el.upgrades[upgradeType].classList.toggle(
      'hidden',
      !isFeatureAllowed(`${upgradeType}Upgrade`, state),
    );
    updatePriceAndLevel(upgradeType, state, params);
  }
}

function updatePriceAndLevel(
  type: ButtonUpgrade,
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
) {
  const { currentLevel, nextLevel, nextPrice } = getCurrentAndNextLevel(type, state, params);

  const canAfford = state.wallet.read('coin') >= (nextPrice ?? 0);
  const isMax = nextLevel == null;

  const buttonEl = el.upgrades[type];

  const disabled = !canAfford || isMax;
  buttonEl.classList.toggle('disabled', disabled);
  buttonEl.classList.toggle('unaffordable', !canAfford);
  buttonEl.classList.toggle('max', isMax);

  const costEl = buttonEl.querySelector<HTMLElement>('.cost .value')!;
  costEl.textContent = nextPrice ? formatNumber(nextPrice) : '—';

  const levelEl = buttonEl.querySelector<HTMLElement>('.level .value')!;
  levelEl.textContent = isMax ? 'MAX' : `Level ${currentLevel + 1}`; // humans start with 1
}

function upgradeHandler(type: RunUpgradeType): (e: PointerEvent) => void {
  return (e) => {
    if (e.currentTarget instanceof HTMLElement && !e.currentTarget.classList.contains('disabled')) {
      const state = readState();
      const params = getUpgradablePermanentParameters();
      doUpgrade(type, state, params);
      prepareRun(state, params);
      updateMainScreen(state, params);
    }
  };
}

type RunUpgradeFn = (baseValue: number, level: number) => number;
type RunUpgradePriceFn = (level: number, params: UpgradablePermanentParameters) => number;

const RUN_UPGRADE_FUNCTIONS: Record<
  RunUpgradeType,
  { price: RunUpgradePriceFn; value: RunUpgradeFn }
> = {
  damage: {
    price: (level, params) =>
      pricePrecision(params.damageUpgradePrice, 1.3 * 3 ** ((level - 1) / 2)), // so we start with 1,2,4,7,12,20
    value: (value, level) => value * 2 ** (level / 6),
  },
  rate: {
    price: (level, params) => pricePrecision(params.rateUpgradePrice, 1.3 * 3 ** ((level - 1) / 2)), // so we start with 1,2,4,7,12,20
    value: (value, level) => value * 2 ** (level / 6),
  },
  players: {
    price: (level, params) => pricePrecision(params.playersUpgradePrice, 31.92 * 1.2577 ** level), // so we start with 40, 50, 64, 80, 100
    value: (value, level) => value + level,
  },
};

function doUpgrade(
  type: RunUpgradeType,
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
) {
  const { nextLevel, nextPrice } = getCurrentAndNextLevel(type, state, params);

  if (!nextLevel) return; // we're at max

  if (state.wallet.read('coin') < nextPrice) return; // cannot afford
  pay('coin', nextPrice);

  setRunUpgradeLevel(type, nextLevel);
}

function getCurrentAndNextLevel(
  type: RunUpgradeType,
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
) {
  const currentLevel = state.runUpgradeLevels[type] ?? 0;

  const maxLevel = getValue(`${type}MaxUpgrade`, params);
  if (currentLevel === maxLevel) return { currentLevel };

  const nextLevel = currentLevel + 1;

  const priceFn = RUN_UPGRADE_FUNCTIONS[type].price;
  const nextPrice = priceFn(nextLevel, params);

  return { currentLevel, nextLevel, nextPrice };
}

export function applyRunUpgrade(
  value: number,
  runUpgradeLevels: RunUpgradeLevels,
  type: RunUpgradeType,
): number {
  const level = runUpgradeLevels[type];
  if (!level) return value;

  const valueFn = RUN_UPGRADE_FUNCTIONS[type].value;
  return valueFn(value, level);
}

export function parseUpgrades(data: unknown): RunUpgradeLevels {
  if (data == null) return {};
  if (typeof data !== 'object') {
    throw new TypeError('malformed run upgrade levels data');
  }

  const retval: RunUpgradeLevels = {};
  for (const [key, value] of Object.entries(data)) {
    if (!RUN_UPGRADE_TYPES.includes(key as RunUpgradeType)) {
      throw new TypeError(`unknown upgrade type ${key}`);
    }
    retval[key as RunUpgradeType] = parseNumber(value);
  }
  return retval;
}

function pricePrecision(base: number, n: number) {
  return Math.max(1, Math.round(base * Number(n.toPrecision(2))));
}

function getValue<Key extends keyof T & string, T extends object>(key: Key, obj: T): T[Key] {
  if (!(key in obj)) {
    throw new Error(`cannot find ${key} in ${JSON.stringify(obj)}`);
  }

  return obj[key];
}

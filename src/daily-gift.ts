import * as dim from '#dimensions';
import { isCurrency, type CurrencyType } from '#types';
import {
  createRandom,
  formatNumber,
  getEl,
  getToday,
  makeEl,
  pickWeightedItem,
  randomIntInRange,
  spread,
} from '#utils';

import { showSection } from './sections';
import {
  addAward,
  addEnergy,
  canGiveDailyGift,
  getCountOfAllCards,
  getDailyGiftMaxCoinsPerCurrentRun,
  isFeatureAllowed,
  readState,
  setDailyGiftGivenToday,
} from './state';

const el = {
  section: getEl('#dailyGift'),
  spinner: getEl('#dailyGift .spinner'),
};

export function init() {
  el.section.addEventListener('click', spin);
  el.spinner.style.setProperty('--spin-time', `${dim.dailyRewardSpinSeconds}s`);
}

let currentPrizes: Prize[] = [];
let spinningAgain = false;
let spinTimeout: number | null = null;

export function showDailyGiftScreen() {
  currentPrizes = get12AvailablePrizes();
  spinningAgain = false;

  el.spinner.style.setProperty('--start-angle', '0deg');

  // fill in the prizes
  el.spinner.textContent = '';
  for (const p of currentPrizes) {
    const prizeEl = addPrize();

    switch (p.award) {
      case 'spin-again':
        makeEl(prizeEl, 'span', 'text spinAgain', 'spin');
        break;

      case 'card':
        makeEl(prizeEl, 'i', 'i cards-icon');
        break;

      case 'coin':
        makeEl(prizeEl, 'i', 'i coins');
        break;

      case 'energy':
        makeEl(prizeEl, 'i', 'i energy');
        break;

      case 'gem':
        makeEl(prizeEl, 'i', 'i gem');
        break;
    }

    if (p.amount) {
      const amountEl = makeEl(prizeEl, 'span', 'amount', formatNumber(p.amount));
      if (p.award !== 'coin') {
        amountEl.classList.add('times');
      }
    }
  }
}

function spin() {
  const state = readState();

  if (el.spinner.classList.contains('spinning')) {
    if (spinTimeout) clearTimeout(spinTimeout);
    spinDone();
    return; // the above will show the award, the next click can close
  }

  if (!canGiveDailyGift(readState())) {
    // we've given the award now
    showSection('mainScreen');
    return;
  }

  let prizes = currentPrizes;
  // remove spin again from consideration if we are already spinning again
  if (spinningAgain) {
    prizes = prizes.slice(1);
  }
  // consider only coin prizes if the player has no funds
  if (state.wallet.read('coin') < 20) {
    prizes = prizes.filter((prize) => prize.award === 'coin');
  }

  const picked = pickWeightedItem(
    prizes.map((p) => ({ value: p, weight: p.factor })),
    Math.random,
  );
  console.log('picked', picked.award, picked.amount ?? '');

  // give prize immediately so if the user is interrupted, they already have it
  // so the user cannot just wait for the spin to almost end and in case they don't like it, quickly reload
  if (picked.award !== 'spin-again') {
    setDailyGiftGivenToday();
    if (isCurrency(picked.award) && picked.amount) {
      addAward({ type: picked.award, amount: picked.amount });
    } else if (picked.award === 'energy' && picked.amount) {
      addEnergy(picked.amount);
    }
  } else {
    spinningAgain = true;
  }

  const index = currentPrizes.indexOf(picked);
  el.spinner.style.setProperty(
    '--target-angle',
    `${Math.round(360 - (index / currentPrizes.length) * 360)}deg`,
  );

  for (const child of el.spinner.children) {
    child.classList.remove('winning');
  }
  el.spinner.children[index]?.classList.add('winning');

  el.spinner.classList.add('spinning');
  spinTimeout = setTimeout(spinDone, dim.dailyRewardSpinSeconds * 1000);
  setTimeout(spinDone, dim.dailyRewardSpinSeconds * 1000);
  setTimeout(showSpinAgain, (dim.dailyRewardSpinSeconds / 2) * 1000);
}

function spinDone() {
  spinTimeout = null;
  // cancel the spin
  el.spinner.classList.remove('spinning');
  el.spinner.style.setProperty(
    '--start-angle',
    el.spinner.style.getPropertyValue('--target-angle'),
  );
  showSpinAgain();
}

function showSpinAgain() {
  el.spinner.querySelector('.spinAgain')!.textContent = 'spin again';
}

interface Prize {
  award: CurrencyType | 'energy' | 'spin-again';
  amount: number | null;
  // probability factor
  factor: number;
}

function get12AvailablePrizes() {
  const state = readState();

  const normals: Prize[] = [];
  const specials: Prize[] = [];

  specials.push({ award: 'spin-again', amount: null, factor: 5 });
  const prng = createRandom(getToday());

  const maxCoins = getDailyGiftMaxCoinsPerCurrentRun();
  normals.push({ award: 'coin', factor: 10, amount: 2 * maxCoins });
  normals.push({ award: 'energy', factor: 10, amount: 3 });
  normals.push({ award: 'coin', factor: 6, amount: 5 * maxCoins });
  normals.push({ award: 'energy', factor: 10, amount: 2 });
  normals.push({ award: 'coin', factor: 10, amount: 3 * maxCoins });
  normals.push({ award: 'energy', factor: 6, amount: 5 });

  if (isFeatureAllowed('cards', state)) {
    specials.push({ award: 'gem', factor: 10, amount: 4 });
    specials.push({ award: 'card', factor: 10, amount: 1 });
    specials.push({ award: 'gem', factor: 10, amount: 8 });

    if (getCountOfAllCards(state) > 20) {
      specials.push({ award: 'card', factor: 6, amount: randomIntInRange(3, 5, prng) });
    }
  }

  // repeat normals so we have 12 prizes
  for (let i = 0; normals.length + specials.length < 12; i += 1) {
    normals.push(normals[i]!);
  }

  return spread(normals, specials);

  // one more prize? some kind of extra surprise with multiple things?
  // any other currencies (when available)
  // extra ticket for special plays (when available)
  // extra roll (ensured only once)
  // - if we do add another prize, it has to be handled in spin() to give it
}

function addPrize() {
  return makeEl(el.spinner, 'div', 'prize');
}

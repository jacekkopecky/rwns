import seedrandom from 'seedrandom';

import { range } from './utils';

const defaultSeed = '2';

export function createRandom(seed = defaultSeed) {
  return seedrandom(seed);
}

export // intentionally on its line for ease of commenting out
let random = seedrandom(defaultSeed);

export function resetRandom(seed = defaultSeed) {
  random = createRandom(seed);
  // randomCount = 0;
}

// let randomCount = 0;
// function rnd() {
//   randomCount += 1;
//   return random();
// }
// export function getRandomCount() {
//   return randomCount;
// }
// export { rnd as random };

export function randomItem<T>(arr: readonly T[], prng = random): T {
  if (arr.length === 0) {
    throw new Error('cannot pick a random item from an empty array');
  }

  return arr[Math.floor(prng() * arr.length)]!;
}

export function removeRandomItem<T>(arr: T[], prng = random): T {
  if (arr.length === 0) {
    throw new Error('cannot remove a random item from an empty array');
  }

  const i = Math.floor(prng() * arr.length);
  const item = arr[i]!;
  arr.splice(i, 1);
  return item;
}

export function randomItemInRange<T>(
  arr: readonly T[],
  min: number,
  max: number,
  prng = random,
): T {
  if (arr.length < max || max < min || min < 0) {
    throw new Error(`bad parameters: min ${min}, max ${max}, length ${arr.length}`);
  }
  console.log(`parameters: min ${min}, max ${max}, length ${arr.length}`);

  return arr[Math.floor(prng() * (max - min + 1)) + min]!;
}

export function spacedRandomItems<T>(arr: readonly T[], n: number, prng = random): T[] {
  if (arr.length <= n) return [...arr];

  const len = arr.length;
  return range(n)
    .map((i) =>
      randomItemInRange(arr, Math.floor((len * i) / n), Math.floor((len * (i + 1)) / n) - 1, prng),
    )
    .toArray();
}

export function spacedRandomIndexes(arr: readonly unknown[], n: number, prng = random): number[] {
  if (arr.length <= n) return range(arr.length).toArray();

  const len = arr.length;
  return range(n)
    .map((i) => {
      const min = Math.floor((len * i) / n);
      const max = Math.floor((len * (i + 1)) / n) - 1;
      return Math.floor(prng() * (max - min + 1)) + min;
    })
    .toArray();
}

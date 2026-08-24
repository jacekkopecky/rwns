type SimpleBetweener = (...fractions: number[]) => number[];

// overload the function so if called with a single parameter, it will definitely give a result
export interface Betweener {
  (f0: number, ...fractions: number[]): [number, ...number[]];
  (...fractions: number[]): number[];
}

/**
 * A helper function that given two numbers, returns a function that turns fractions into linear
 * interpolations between the two numbers.
 *
 * Example:
 * const betweenX = tween(2, 8);
 * betweenX(0, 0.5, 1) -> [2, 5, 8]
 * betweenX(0.8) -> [6.8] // 80% between 2 and 8
 */
export function tween(a: number, b: number): Betweener;
export function tween(a: number, b: number): SimpleBetweener {
  return (...fractions) => fractions.map((f) => a + (b - a) * f);
}

function betweenTwoNumbers(a: number, b: number, f: number) {
  return a + (b - a) * f;
}

/**
 * Like tween, this one gets any number of values (at least one) and translates 0 to the first
 * value, 1 to the last, and anything in between to linear interpolation of the appropriate two
 * numbers in the values.
 *
 * Example:
 * const upAndDown = multiTween(1, 2, 0);
 * upAndDown(0, 0.25, 0.5, 0.75, 1) -> [1, 1.5, 2, 1, 0]
 */
export function multiTween(val0: number, ...values: number[]): Betweener;
export function multiTween(...values: number[]): SimpleBetweener {
  const len = values.length;

  if (len === 0) throw new Error('betweener must have at least one value');

  if (len === 1) {
    return (...fractions) => fractions.map(() => values[0]!);
  }

  function findValue(f: number) {
    if (f <= 0) return values[0]!;
    const index = Math.floor((len - 1) * f);
    if (index >= len - 1) return values[len - 1]!;
    return betweenTwoNumbers(values[index]!, values[index + 1]!, f * (len - 1) - index);
  }

  return (...fractions) => fractions.map((f) => findValue(f));
}

/**
 * Add two betweeners.
 */
export function add(...arr: Betweener[]): Betweener;
export function add(...arr: SimpleBetweener[]): SimpleBetweener {
  return (...fractions) => {
    const values = arr.map((betweener) => betweener(...fractions));
    return values.reduce((arr1, arr2) => arr1.map((x, i) => x + (arr2[i] ?? 0)));
  };
}

/**
 * Add a number to a betweener.
 */
export function addScalar(n: number, b: Betweener): Betweener;
export function addScalar(n: number, b: SimpleBetweener): SimpleBetweener {
  return (...fractions) => {
    const values = b(...fractions);
    return values.map((v) => n + v);
  };
}

/**
 * Subtract a betweener from a number.
 */
export function scalarMinus(n: number, b: Betweener): Betweener;
export function scalarMinus(n: number, b: SimpleBetweener): SimpleBetweener {
  return (...fractions) => {
    const values = b(...fractions);
    return values.map((v) => n - v);
  };
}

/**
 * Multiply a betweener by a number.
 */
export function multiplyScalar(n: number, b: Betweener): Betweener;
export function multiplyScalar(n: number, b: SimpleBetweener): SimpleBetweener {
  return (...fractions) => {
    const values = b(...fractions);
    return values.map((v) => n * v);
  };
}

/**
 * Combine two betweeners, the inner runs on the input, the outer runs on the output of the inner.
 */
export function compose(outer: Betweener, inner: Betweener): Betweener {
  return (...fractions) => outer(...inner(...fractions));
}

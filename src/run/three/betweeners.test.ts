import { describe, expect, it } from 'vitest';

import * as B from './betweeners';

describe('betweeners', () => {
  describe('tween', () => {
    it('should work in the range', () => {
      const x = B.tween(8, 16);
      expect(x(0)).toEqual([8]);
      expect(x(1, 0.25, 0.5, 0.75, 0)).toEqual([16, 10, 12, 14, 8]);
    });

    it('should work linearly outside the range', () => {
      const x = B.tween(8, 16);
      expect(x(2, 3, -3)).toEqual([24, 32, -16]);
    });
  });

  describe('multiTween', () => {
    it('should work in the range', () => {
      const x = B.multiTween(8, 16, 0, 32, 16);
      expect(x(0)).toEqual([8]);
      expect(x(1)).toEqual([16]);
      expect(x(1, 0.25, 0.5, 0.75, 0)).toEqual([16, 16, 0, 32, 8]);

      expect(x(0.3)[0]).toBeCloseTo(12.8);
    });

    it('should clamp to first/last value outside the range', () => {
      const x = B.multiTween(8, 7, 3, 16);
      expect(x(2, 3, -3)).toEqual([16, 16, 8]);
    });

    it('should work with one or two values only', () => {
      const one = B.multiTween(8);
      expect(one(2, 3, -3, 1, 0.5, 0)).toEqual([8, 8, 8, 8, 8, 8]);

      // careful, this one goes down so 0->8, 1->4
      const two = B.multiTween(8, 4);
      expect(two(2, 3, -3, 1, 0.5, 0)).toEqual([4, 4, 8, 4, 6, 8]);
    });
  });

  describe('add', () => {
    it('should add the betweeners', () => {
      const x = B.multiTween(8, 16, 0, 32, 16);
      const y = B.tween(4, 8);

      const added = B.add(x, y);

      expect(added(0)).toEqual([12]);
      expect(added(1)).toEqual([24]);
      expect(added(1, 0.25, 0.5, 0.75, 0)).toEqual([24, 21, 6, 39, 12]);

      expect(added(0.3)[0]).toBeCloseTo(12.8 + 5.2);
      expect(added(-1)[0]).toBe(8);
    });
  });

  describe('multiplyScalar', () => {
    it('should give multiplied numbers', () => {
      const x = B.multiTween(8, 16, 0, 32, 16);
      const x2 = B.multiplyScalar(2, x);

      expect(x2(0)).toEqual([16]);
      expect(x2(1)).toEqual([32]);
      expect(x2(1, 0.25, 0.5, 0.75, 0)).toEqual([32, 32, 0, 64, 16]);

      expect(x2(0.3)[0]).toBeCloseTo(25.6);
      expect(x2(2, 3, -3)).toEqual([32, 32, 16]);

      const x3 = B.multiplyScalar(3, x);

      expect(x3(0)).toEqual([24]);
      expect(x3(1)).toEqual([48]);
      expect(x3(1, 0.25, 0.5, 0.75, 0)).toEqual([48, 48, 0, 96, 24]);

      expect(x3(0.3)[0]).toBeCloseTo(38.4);
      expect(x3(2, 3, -3)).toEqual([48, 48, 24]);
    });
  });

  describe('addScalar', () => {
    it('should give n + numbers', () => {
      const x = B.multiTween(8, 16, 0, 32, 16);
      const xPlus2 = B.addScalar(2, x);

      expect(xPlus2(2, -3, 1, 0.25, 0.5, 0.75, 0)).toEqual([18, 10, 18, 18, 2, 34, 10]);

      expect(xPlus2(0.3)[0]).toBeCloseTo(14.8);
    });
  });

  describe('scalarMinus', () => {
    it('should give n - numbers', () => {
      const x = B.multiTween(8, 16, 0, 32, 16);
      const xPlus2 = B.scalarMinus(40, x);

      expect(xPlus2(2, -3, 1, 0.25, 0.5, 0.75, 0)).toEqual([24, 32, 24, 24, 40, 8, 32]);

      expect(xPlus2(0.3)[0]).toBeCloseTo(27.2);
    });
  });

  describe('compose', () => {
    it('should compose the betweeners', () => {
      const x = B.multiTween(8, 16, 0);
      const y = B.tween(0, -1); // negate

      const multiThenNegate = B.compose(y, x);
      const negateThenMulti = B.compose(x, y);

      expect(multiThenNegate(-1, -0.25, 0, 0.25, 0.5, 1, 2)).toEqual([-8, -8, -8, -12, -16, 0, 0]);
      expect(negateThenMulti(-1, -0.25, 0, 0.25, 0.5, 1, 2)).toEqual([0, 12, 8, 8, 8, 8, 8]);
    });
  });
});

// this could be useful

// function closeTo(arr: number[], digits = 4) {
//   return arr.map((n) => expect.closeTo(n, digits) as number);
// }

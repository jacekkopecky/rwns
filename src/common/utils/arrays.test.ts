import { describe, expect, it } from 'vitest';

import { assignEndBunchedRewards, range, spread } from './arrays';

describe('arrays utility functions', () => {
  describe('range', () => {
    it('yields numbers from 0 to n-1', () => {
      expect([...range(5)]).toEqual([0, 1, 2, 3, 4]);
      expect([...range(1)]).toEqual([0]);
      expect([...range(100)]).toHaveLength(100);
    });

    it('yields nothing for n=0', () => {
      expect([...range(0)]).toEqual([]);
    });

    it('is an iterator', () => {
      expect(range(100)).toBeInstanceOf(Iterator);
    });
  });

  describe('assignEndBunchedRewards', () => {
    it('returns all zeros when amount is 0', () => {
      expect(assignEndBunchedRewards(0, 7)).toEqual([0, 0, 0, 0, 0, 0, 0]);
    });

    it('handles documented examples for 4 rows', () => {
      expect(assignEndBunchedRewards(1, 4)).toEqual([0, 0, 0, 1]);
      expect(assignEndBunchedRewards(2, 4)).toEqual([0, 0, 1, 1]);
      expect(assignEndBunchedRewards(3, 4)).toEqual([0, 0, 1, 2]);
      expect(assignEndBunchedRewards(4, 4)).toEqual([0, 1, 1, 2]);
      expect(assignEndBunchedRewards(5, 4)).toEqual([0, 1, 2, 2]);
      expect(assignEndBunchedRewards(6, 4)).toEqual([0, 1, 2, 3]);
      expect(assignEndBunchedRewards(7, 4)).toEqual([1, 1, 2, 3]);
      expect(assignEndBunchedRewards(8, 4)).toEqual([1, 2, 2, 3]);
      expect(assignEndBunchedRewards(9, 4)).toEqual([1, 2, 3, 3]);
      expect(assignEndBunchedRewards(10, 4)).toEqual([1, 2, 3, 4]);

      expect(assignEndBunchedRewards(16, 4)).toEqual([1, 3, 5, 7]);
      expect(assignEndBunchedRewards(20, 4)).toEqual([2, 4, 6, 8]);
      expect(assignEndBunchedRewards(100, 4)).toEqual([10, 20, 30, 40]);
    });

    it('returns array with correct length', () => {
      expect(assignEndBunchedRewards(5, 4)).toHaveLength(4);
      expect(assignEndBunchedRewards(5, 8)).toHaveLength(8);
    });

    it('sum of result equals amount', () => {
      for (let amount = 0; amount <= 100; amount++) {
        const result = assignEndBunchedRewards(amount, 5);
        expect(result.reduce((a, b) => a + b, 0)).toBe(amount);
      }
    });

    it('handles single row', () => {
      expect(assignEndBunchedRewards(5, 1)).toEqual([5]);
    });

    it('handles large amounts that exceed triangle capacity', () => {
      const result = assignEndBunchedRewards(100, 4);
      expect(result.reduce((a, b) => a + b, 0)).toBe(100);
      expect(result).toHaveLength(4);

      expect(result).toEqual([10, 20, 30, 40]);
    });

    it('never decreases', () => {
      for (let amount = 0; amount <= 100; amount += 3) {
        const result = assignEndBunchedRewards(amount, 8);
        for (let i = 1; i < result.length; i += 1) {
          expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]!);
        }
      }
    });
  });

  describe('spread', () => {
    it('spreads items evenly when both arrays have items', () => {
      expect(spread(['1', '2', '3'], ['a', 'b'])).toEqual(['a', '1', '2', 'b', '3']);
      expect(spread(['c1', 'c2', 'c3', 'e1', 'e2', 'e3'], ['x1', 'x2', 'x3'])).toEqual([
        'x1',
        'c1',
        'c2',
        'x2',
        'c3',
        'e1',
        'x3',
        'e2',
        'e3',
      ]);
    });

    it('returns copy of into when from is empty', () => {
      const into = [1, 10, 2, 8];
      const result = spread(into, []);
      expect(result).toEqual(into);
      expect(result).not.toBe(into); // should be a copy
    });

    it('handles empty into array', () => {
      const result = spread([], ['j', 'a', 'c', 'e', 'k']);
      expect(result).toHaveLength(5);
      expect(result).toEqual(['j', 'a', 'c', 'e', 'k']);
    });
  });
});

import { describe, expect, it } from 'vitest';

import { marvinTurnTimeEasing } from './marvin-tools';

describe('marvin functions', () => {
  it('marvinTurnTimeEasing should behave correctly', () => {
    // time fraction: 0  0.1  0.5  0.9  1
    // turn fraction: 0  0.05 0.5  0.95 1
    expect([0, 0.1, 0.5, 0.9, 1].map(marvinTurnTimeEasing)).toEqual([0, 0.05, 0.5, 0.95, 1]);
  });
});

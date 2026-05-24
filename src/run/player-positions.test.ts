import * as THREE from 'three';
import { describe, it, expect } from 'vitest';

import { resetRandom } from '#utils';

import { _test } from './player-positions';
import { Circle } from './types';

describe('player positions', () => {
  it.only('should generate the expected first positions', () => {
    resetRandom('0');
    // we have to control randomness for this test
    // prettier-ignore
    expect([..._test.generateNextPosition().take(22)].map((p) => `${p.x},${p.y}`)).toEqual([
      '0,0',  '1,0',    '0.5,1', '-0.5,1', '0,2',
      '1,2',  '1.5,1',  '0.5,3', '-1,2',   '-0.5,3',
      '-1,0', '-1.5,1', '0,4',   '-1.5,3', '1.5,3',
      '1,4',  '-1,4',   '2,2',   '0.5,5',  '-0.5,5',
      '-2,2', '-2,4',
    ]);
  });

  // prettier-ignore
  const trivialCircleCases = [
    [[], [0, 0], 0],
    [[[1, 0]], [1, 0], 0],
    [[[1, 0], [1, 0]], [1, 0], 0],
    [[[1, 0], [2, 0]], [1.5, 0], 0.5],
    [[[1, 0], [1, 1]], [1, 0.5], 0.5],
    [[[1, 1], [2, 0]], [1.5, 0.5], Math.sqrt(0.5)],
    [[[2, 0], [1, 1]], [1.5, 0.5], Math.sqrt(0.5)],
    // permutations of the same
    [[[0, 0], [1, 0], [0, 1]], [0.5, 0.5], Math.sqrt(0.5)],
    [[[1, 0], [0, 0], [0, 1]], [0.5, 0.5], Math.sqrt(0.5)],
    [[[1, 0], [0, 1], [0, 0]], [0.5, 0.5], Math.sqrt(0.5)],
    // permutations of the same
    [[[0, 2], [-1, 0], [1, 0]], [0, 0.75], 1.25],
    [[[-1, 0], [1, 0], [0, 2]], [0, 0.75], 1.25],
  ] as const;

  it.each([
    ...trivialCircleCases,
    // prettier-ignore
    // extra circle that is bigger than the minimal circle enclosing the three points
    [[[1, 0], [0, 1], [0, 2]], [1.5, 1.5], Math.sqrt(0.5*0.5 + 1.5*1.5)],
  ] as const)('should compute circles right %#', (points, center, radius) => {
    const c = _test.trivialCircle(points.map((p) => new THREE.Vector2(...p)));
    expect(c).toEqual(new Circle(new THREE.Vector2(...center), radius));
  });

  it.each(
    // prettier-ignore
    [
      ...trivialCircleCases,
      [[[1, 0], [0, 1], [0, 2]], [0.5, 1], Math.sqrt(0.5*0.5 + 1)],
      // now with extra points inside the circle
      [[[1, 0], [0, 1], [0, 2], [0.5, 1]], [0.5, 1], Math.sqrt(0.5*0.5 + 1)],
      [[[1, 1], [1, 0], [0, 1], [0, 2], [0.5, 1]], [0.5, 1], Math.sqrt(0.5*0.5 + 1)],
    ] as const,
  )('should find the right bounding circle %#', (points, center, radius) => {
    resetRandom('0');
    const vectors = points.map((p) => new THREE.Vector2(...p));
    const c = _test.welzlBoundingCircle(vectors);
    expect(c).toEqual(new Circle(new THREE.Vector2(...center), radius));
  });
});

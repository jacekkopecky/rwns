import { createRandom, random, randomItem } from '#utils';
import * as THREE from 'three';
import { Circle } from './types';

export function generatePlayerPosition(i: number, prng = random) {
  const pos = getPlayerPosition(i);
  const rowJitter = i > 0 ? (prng() - 0.5) / 4 : 0;

  return { row: pos.y + rowJitter, column: pos.x };
}

// cache nextPosition computations, they're not cheap
const playerNumberToPosition: THREE.Vector2[] = [];
const nextPosition = generateNextPosition();

function getPlayerPosition(i: number) {
  while (!playerNumberToPosition[i]) {
    playerNumberToPosition.push(nextPosition.next().value!);
  }

  return playerNumberToPosition[i];
}

const posPrng = createRandom('0');
function* generateNextPosition() {
  // start from two side by side
  const positions: THREE.Vector2[] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0)];
  yield positions[0]!;
  yield positions[1]!;

  while (true) {
    const nextPos = findNextPosition(positions, posPrng);
    yield nextPos;
    positions.push(nextPos);
  }
}

function findNextPosition(positions: THREE.Vector2[], prng = random): THREE.Vector2 {
  let minRadius = Infinity;
  let minPos = null;

  // go through positions, generate all possible nexts from each, for those that aren't there check area
  for (const startingPos of positions) {
    for (const nextPos of generateNextPosFrom(startingPos)) {
      if (positions.every((p) => nextPos.distanceToSquared(p) > 0)) {
        const boundingCircle = welzlBoundingCircle(
          packCircleRows([...positions, nextPos]),
          [],
          prng,
        );
        if (boundingCircle.radius < minRadius) {
          minRadius = boundingCircle.radius;
          minPos = nextPos;
        }
      }
    }
  }

  if (!minPos) {
    throw new Error('could not generate a new position???');
  }

  return minPos;
}

function packCircleRows(positions: THREE.Vector2[]): THREE.Vector2[] {
  // the rows are not at 1-distance: since the circles are offset by 60°, they are packed closer
  const rowSpacing = Math.sqrt(3 / 4);

  let minX = Infinity,
    maxX = -Infinity;
  for (const pos of positions) {
    if (minX > pos.x) minX = pos.x;
    if (maxX < pos.x) maxX = pos.x;
  }
  const width = maxX - minX;

  return positions.map((pos) => {
    const p = pos.clone();
    p.y *= rowSpacing * 1.01 ** p.y; // penalize depth
    p.x *= (1 + width / 30) ** 2 * 1.01 ** p.y; // penalize overall width exponentially
    return p;
  });
}

// possible moves: ±x/2,+y*sqrt(3/4), or simply ±x - preferring vertical moves
function* generateNextPosFrom(pos: THREE.Vector2) {
  yield new THREE.Vector2(pos.x + 1, pos.y);
  yield new THREE.Vector2(pos.x - 1, pos.y);
  yield new THREE.Vector2(pos.x + 0.5, pos.y + 1);
  yield new THREE.Vector2(pos.x - 0.5, pos.y + 1);
}

function welzlBoundingCircle(
  positions: THREE.Vector2[],
  knownBoundaryPoints: THREE.Vector2[] = [],
  prng = random,
): Circle {
  // from wikipedia https://en.wikipedia.org/wiki/Smallest-circle_problem
  // algorithm welzl is
  //     input: Finite sets P and R of points in the plane |R| ≤ 3.
  //     output: Minimal disk enclosing P with R on the boundary.
  //     if P is empty or |R| = 3 then
  //         return trivial(R)
  //     choose p in P (randomly and uniformly)
  //     D := welzl(P − {p}, R)
  //     if p is in D then
  //         return D
  //     return welzl(P − {p}, R ∪ {p})

  if (positions.length === 0 || knownBoundaryPoints.length === 3) {
    return trivialCircle(knownBoundaryPoints);
  }

  const p = randomItem(positions, prng);
  const withoutP = positions.filter((q) => q !== p);

  const D = welzlBoundingCircle(withoutP, knownBoundaryPoints, prng);
  if (D.containsPoint(p)) return D;

  return welzlBoundingCircle(withoutP, knownBoundaryPoints.concat(p), prng);
}

const _v1 = new THREE.Vector2();
const _v2 = new THREE.Vector2();

function trivialCircle(points: THREE.Vector2[]): Circle {
  if (points.length <= 1) {
    return new Circle(points[0], 0);
  } else if (points.length === 2) {
    const [p1, p2] = points;
    const c = new Circle(undefined, p1!.distanceTo(p2!) / 2);
    c.center.addScaledVector(p1!, 0.5);
    c.center.addScaledVector(p2!, 0.5);
    return c;
  } else {
    // implemented from https://stackoverflow.com/a/32865629
    // X1-= X0; Y1-= Y0; X2-= X0; Y2-= Y0;
    // double Z1= X1 * X1 + Y1 * Y1;
    // double Z2= X2 * X2 + Y2 * Y2;
    // double D= 2 * (X1 * Y2 - X2 * Y1);
    // double Xc= (Z1 * Y2 - Z2 * Y1) / D + X0;
    // double Yc= (X1 * Z2 - X2 * Z1) / D + Y0;

    _v1.copy(points[1]!).sub(points[0]!);
    _v2.copy(points[2]!).sub(points[0]!);

    const z1 = _v1.x ** 2 + _v1.y ** 2;
    const z2 = _v2.x ** 2 + _v2.y ** 2;
    const d = 2 * (_v1.x * _v2.y - _v2.x * _v1.y);

    const center = new THREE.Vector2((z1 * _v2.y - z2 * _v1.y) / d, (z2 * _v1.x - z1 * _v2.x) / d);
    center.add(points[0]!);

    return new Circle(center, center.distanceTo(points[0]!));
  }
}

export const _test = {
  welzlBoundingCircle,
  trivialCircle,
  generateNextPosition,
};

import * as THREE from 'three';

export function* range(n: number) {
  for (let i = 0; i < n; i += 1) {
    yield i;
  }
}

export function getByName<T extends THREE.Object3D>(objects: T[], name: string) {
  const retval = objects.find((obj) => obj.name === name);
  if (!retval) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}

export function indexByName(objects: THREE.Object3D[], name: string) {
  const retval = objects.findIndex((obj) => obj.name === name);
  if (retval < 0) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}

/**
 * Assign the given amount to the end part of an array of rows.
 * Bunch awards in a triangle at the far end.
 *
 * The following are examples of amounts and assigments to 4 rows:
 * 1:  0 0 0 1 (from the first row to the last)
 * 2:  0 0 1 1
 * 3:  0 0 1 2
 * 4:  0 1 1 2
 * 5:  0 1 2 2
 * 6:  0 1 2 3
 * 7:  1 1 2 3
 * 8:  1 2 2 3
 * 9:  1 2 3 3
 * 10: 1 2 3 4
 *
 * 16: 1 3 5 7
 * 20: 2 4 6 8
 * 100: 10 20 30 40
 */
export function assignEndBunchedRewards(amount: number, rows: number): number[] {
  const retval = new Array<number>(rows).fill(0);

  if (amount <= 0) {
    return retval;
  }

  // initially, work towards a minimal triangle like 1+2+3+…+length
  // amount in the triangle = (length+1)*length/2
  const length = Math.ceil((Math.sqrt(1 + 8 * amount) - 1) / 2);

  if (length <= rows) {
    const triangleAmount = ((length + 1) * length) / 2;

    // first assign the full triangle of the computed length
    const zeros = rows - length;
    for (let i = 0; i < length; i += 1) {
      retval[zeros + i] = i + 1;
    }

    // we made the triangle as small as it needs to be with the length computation
    console.assert(triangleAmount - amount < length);

    // but amount may be a bit less than we have already assigned, remove what we need
    for (let i = 0; i < triangleAmount - amount; i += 1) {
      retval[rows - 1 - i]! -= 1;
    }
  } else {
    assignMoreThanTriangle(amount, retval);
  }

  return retval;
}

function assignMoreThanTriangle(amount: number, data: number[]) {
  // assign to each row such that optimally row N has N times the amount of row 1
  // solve a for   X = a + 2a + 3a + ... + La
  // give the first one, then solve for   X = 2a + 3a + ... + La
  // give 2a to the second one, and so on

  const length = data.length;
  let row = 0;
  let remaining = amount;

  while (row < length - 1) {
    const a = ((row + 1) * 2 * remaining) / (length - row) / (length + 1 + row);
    const given = Math.floor(a);
    data[row] = given;
    remaining -= given;
    row += 1;
  }

  data[row] = remaining;
}

/**
 * Spread the `from` array into the `into` array,
 * starting with the first element of `from` and spacing the rest evenly inside `into`.
 */
export function spread<T>(into: T[], from: T[]): T[] {
  const retval = [...into];
  const N = from.length;
  for (let i = 0; i < N; i += 1) {
    const pos = Math.round((into.length / N) * (N - i - 1));
    retval.splice(pos, 0, from[N - 1 - i]!);
  }

  return retval;
}

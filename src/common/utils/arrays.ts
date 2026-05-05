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

export function indexByName<T extends THREE.Object3D>(objects: T[], name: string) {
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
 * 1:  0001 (from the first row to the last)
 * 2:  0011
 * 3:  0012
 * 4:  0112
 * 5:  0122
 * 6:  0123
 * 7:  1123
 * 8:  1223
 * 9:  1233
 * 10: 1234
 */
export function assignEndBunchedRewards(amount: number, rows: number): number[] {
  const retval = new Array(rows).fill(0);

  // the triangle will have this length: at most `rows`, otherwise solves the equation of the
  // sum of the triangle: (length+1)*length/2 = amount
  const length = Math.min(rows, Math.ceil((Math.sqrt(1 + 8 * amount) - 1) / 2));

  // first assign a full triangle of the computed length
  const zeros = rows - length;
  for (let i = 0; i < length; i += 1) {
    retval[zeros + i] = i + 1;
  }

  const assigned = ((length + 1) * length) / 2;

  if (assigned <= amount) {
    // amount is more than we can fit in the rows, simply give the rest to the last row
    // it's not expected that the awards will grow so much
    retval[rows - 1] += amount - assigned;
  } else {
    // amount is less than we have already assigned, remove a few
    console.assert(assigned - amount < length);
    for (let i = 0; i < assigned - amount; i += 1) {
      retval[rows - 1 - i] -= 1;
    }
  }

  return retval;
}

// for (let i = 1; i <= 40; i += 1) {
//   console.log(i, assignEndBunchedRewards(i, 8).join(','));
// }

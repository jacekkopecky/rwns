import * as THREE from 'three';

import { createRandom, randomItem, range } from '#utils';

const _color = new THREE.Color();
const prng = createRandom(`brickSquare1`);

const brickOffsets = [0, -3, -1, -2];

const brownBrickRoadColors = [
  // a range of browns
  ...range(10).map((n) =>
    _color.setHSL(28 / 360, 0.37, (30 + n * 2) / 100, THREE.SRGBColorSpace).getHex(),
  ),
];

/**
 * @param detail how many bricks (in blocks of 4 brick lines) to fit in a side, so a 100x100 square
 * with detail=1 will have four lines of bricks sized 25x50
 */
export function createBrickSquare(size = 100, detail = 4, colors = brownBrickRoadColors) {
  const brickBlocks4 = Math.round(detail);

  // we'll need to have the color numbers like 0xccac90 split into arrays like [0xcc, 0xac, 0x90],
  // repeated six times because we're giving the same color to 6 vertices
  const colorArrays = colors.map((num) => {
    _color.setHex(num, THREE.SRGBColorSpace);
    const { r, g, b } = _color;
    return [r, g, b, r, g, b, r, g, b, r, g, b, r, g, b, r, g, b];
  });

  // brick pattern: 2x4 bricks in landscape orientation,
  // first line starts with a full brick, then 1/4, then 3/4, then half

  // 3 of each 4 lines have an an extra part brick because they start with a part brick, too
  const brickLines = brickBlocks4 * 4;
  const brickQuarterWidths = brickBlocks4 * 8;
  const bricks = brickBlocks4 ** 2 * 8 + brickBlocks4 * 3;
  const points = bricks * 18; // per brick two triangles, each has three points, each has three coordinates

  const h = size / brickLines;
  const quarterW = h / 2;

  const vertices = new Float32Array(points);
  const vertexColors = new Float32Array(points);

  let i = 0; // array index
  for (let line = 0; line < brickLines; line += 1) {
    const y1 = line * h;
    const y2 = (line + 1) * h;

    // `quarter` counts quarters of bricks, so on the first line, the bricks have j 0,4,8,12 etc.
    // the second line starts with a quarter brick, so j is -3,1,5,9 etc.
    for (let quarter = brickOffsets[line % 4]!; quarter < brickQuarterWidths; quarter += 4) {
      const x1 = Math.max(0, quarter * quarterW);
      const x2 = Math.min(size, (quarter + 4) * quarterW);

      // points, only two coordinates needed, the array is initialized to 0
      const A = [x1, y1];
      const B = [x2, y1];
      const C = [x2, y2];
      const D = [x1, y2];

      // triangles: ABC, CDA
      vertices.set(A, i);
      vertices.set(B, i + 3);
      vertices.set(C, i + 6);
      vertices.set(C, i + 9);
      vertices.set(D, i + 12);
      vertices.set(A, i + 15);

      const color = randomItem(colorArrays, prng);
      vertexColors.set(color, i);

      i += 18;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(vertexColors, 3));

  geometry.translate(-size / 2, -size / 2, 0);

  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({
    vertexColors: true,
    shadowSide: THREE.DoubleSide,
  });
  const retval = new THREE.Mesh(geometry, material);
  retval.receiveShadow = true;

  // // uncomment to see the wireframe
  // retval.add(
  //   new THREE.Mesh(
  //     geometry,
  //     new THREE.MeshBasicMaterial({ wireframe: true, color: 0, wireframeLinewidth: 4 }),
  //   ),
  // );

  return retval;
}

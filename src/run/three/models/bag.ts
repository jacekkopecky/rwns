import * as THREE from 'three';

import * as dim from '#dimensions';

const bagColor = new THREE.MeshPhysicalMaterial({
  color: 0xffd700,
  emissive: 0x665000,
  flatShading: false,
  metalness: 0.7,
  roughness: 0.5,
  reflectivity: 1,
});

const [dia, h] = dim.modelSizes.bag;
const w = dia / 2;

const geo = new THREE.LatheGeometry(
  [
    [0, 0],
    [w * 0.9, 0],
    [w, h * 0.1],
    [w * 0.8, h * 0.4],
    [w * 0.15, h * 0.85],
    [w * 0.3, h],
    [0, h],
  ].map((arr) => new THREE.Vector2(...arr)),
  8,
).applyMatrix4(
  // skew the bag a bit
  new THREE.Matrix4().makeShear(0, 0, 0.07, -0.15, 0, 0),
);

export function createBagModel(material: THREE.Material = bagColor) {
  return new THREE.Mesh(geo, material);
}

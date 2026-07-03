import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import * as dim from '#dimensions';

import * as mat from '../materials';

const [w, h] = dim.modelSizes.boulder;
const r = (w / 2) * Math.sqrt(2);

// 45°-sloped top height and outer radius as ratio of height and width
const top = 0.1;
const topRadius = 0.7;

const midH = (dim.modelSizes.player[1] / 2) * 1.35; // try to match it at bullet height

const topR = r * topRadius - h * top * Math.sqrt(2);
const topR2 = topR * Math.sqrt(2);

const geo = BufferGeometryUtils.mergeGeometries([
  new THREE.PlaneGeometry(topR2, topR2).rotateX(-Math.PI / 2).translate(0, h, 0),
  new THREE.LatheGeometry(
    [
      [r * 0.9, 0],
      [r, midH],
      [r * topRadius, h * (1 - top)],
      [topR, h],
    ].map((arr) => new THREE.Vector2(...arr)),
    4,
  ).rotateY(Math.PI / 4),
  // an extra plane in the middle to prevent shadow artefacts near camera
  new THREE.PlaneGeometry(w, w).rotateX(-Math.PI / 2).translate(0, midH, 0),
]);

export function createBoulderModel(material: THREE.Material = mat.colorFlatMaterials.beige1) {
  const retval = new THREE.Mesh(geo, material);
  retval.receiveShadow = true;
  retval.castShadow = true;
  return retval;
}

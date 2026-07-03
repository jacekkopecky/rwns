import type * as THREE from 'three';

import * as dim from '#dimensions';
import { random } from '#utils';

import { Circle } from '../../types';
import { shrinkToGone } from '../animations';
import { createBagModel } from '../models';

export function createBag() {
  const bag = createBagModel();

  bag.userData.extent2d = new Circle(undefined, dim.modelSizes.bag[0] / 2);
  bag.userData.type = 'object';

  bag.castShadow = true;
  bag.receiveShadow = true;
  bag.rotateY(random() * Math.PI * 2);

  return bag;
}

export function killBag(obj: THREE.Object3D) {
  shrinkToGone(obj, dim.objectDyingDuration);
}

import * as THREE from 'three';

import * as dim from '#dimensions';
import { random } from '#utils';

import { shrinkToGone, rotateAlways } from '../animations';
import { createGemModel } from '../models';
import { Circle } from '../../types';
import { collectGem } from '../../../state';

export function createGem(id?: string, withoutRotation = false) {
  const gem = createGemModel();

  gem.userData.extent2d = new Circle(undefined, dim.modelSizes.gem[0] / 2);
  gem.userData.type = 'object';
  if (id) gem.userData.id = id;

  gem.castShadow = true;

  // tweak position so bullet hits look good
  gem.translateY(dim.modelSizes.player[1] / 2);
  gem.userData.height = dim.modelSizes.gem[1];

  if (!withoutRotation) {
    gem.rotateY(random() * Math.PI);

    const action = rotateAlways(gem, dim.gemRotationsPerSecond, 'y');
    gem.addEventListener('removed', () => action.stop());
  }

  return gem;
}

export function killGem(obj: THREE.Object3D, givingAward = false) {
  if (givingAward && obj.userData.id) {
    // remember this gem has been collected
    collectGem(obj.userData.id);
  }

  if (!givingAward) {
    shrinkToGone(obj, dim.objectDyingDuration);
  }
  // else it will be used for giving the award so do nothing to it
}

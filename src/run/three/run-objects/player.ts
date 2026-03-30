import * as THREE from 'three';

import * as dim from '#dimensions';

import { Circle } from '../../types';
import { fallAndShrinkToGone } from '../animations';
import * as mat from '../materials';
import { markAsDying } from '../resources';
import { Marvin } from '../models';

const normalMaterial = mat.colorFlatMaterials.silver;
const normalGunMaterial = mat.colorFlatMaterials.gunGrey;

const dyingMaterials = new Map<unknown, typeof normalMaterial>();
dyingMaterials.set(normalMaterial, mat.colorTransparentMaterials.red1);
dyingMaterials.set(normalGunMaterial, mat.colorTransparentMaterials.red1);

export function createPlayer(): THREE.Object3D {
  const [w, h] = dim.modelSizes.player;
  const marvin = new Marvin(
    {
      hipWidth: w,
      legLength: h / 2,
      legRadius: h * 0.053,
    },
    normalMaterial,
    normalGunMaterial,
  );
  const obj = marvin.object;

  // extent radius a bit bigger than width because the arms are outside hip width
  obj.userData.extent2d = new Circle(undefined, (w / 2) * 1.3);
  obj.userData.type = 'player';
  obj.userData.gunHeight = marvin.getGunHeight();
  return obj;
}

export function setPlayerMoving(player: THREE.Object3D, moving: boolean) {
  // todo
}

export function killPlayer(player: THREE.Object3D) {
  markAsDying(player);
  fallAndShrinkToGone(player, dim.playerDyingDuration, true);

  player.traverse((obj) => {
    if ('material' in obj) {
      const dyingMaterial = dyingMaterials.get(obj.material);
      if (dyingMaterial) obj.material = dyingMaterial;
    }
  });
}

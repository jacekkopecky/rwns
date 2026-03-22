import * as THREE from 'three';

import * as dim from '#dimensions';

import { setSpriteMaterial } from '../three/materials';
import {
  createSpriteObject,
  getDyingMaterial,
  markAsDying,
  scaleSpriteInPlace,
} from '../three/resources';

export function createBullet(player: THREE.Object3D): THREE.Object3D {
  return createSpriteObject('bullet', { y: player.scale.y / 2 });
}

export function killBullet(bullet: THREE.Object3D) {
  markAsDying(bullet);
  setSpriteMaterial(bullet, getDyingMaterial(bullet));
  scaleSpriteInPlace(bullet, 2);
  setTimeout(() => bullet.removeFromParent(), dim.playerBulletDyingDuration * 1000);
}

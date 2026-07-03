import * as THREE from 'three';

import * as dim from '#dimensions';

import { Circle } from '../../types';
import { rotateAlways } from '../animations';
import { createBulletModel, explosionTemplate } from '../models';
import { getExtentFrontY, markAsDying } from '../resources';

export function createBullet(player: THREE.Object3D): THREE.Object3D {
  const bullet = createBulletModel();
  bullet.userData.extent2d = new Circle(undefined, dim.modelSizes.bullet[1] / 2);
  bullet.userData.type = 'bullet';
  bullet.translateY((player.userData.gunHeight ?? dim.modelSizes.player[1] / 2) as number);

  const action = rotateAlways(bullet, dim.bulletRotationsPerSecond, 'z');
  bullet.addEventListener('removed', () => action.stop());

  return bullet;
}

export function killBullet(bullet: THREE.Object3D, objectExtent: THREE.Box2 | Circle) {
  if (bullet instanceof THREE.Mesh) {
    bullet.geometry = explosionTemplate.geometry;
    bullet.material = explosionTemplate.material;
  }

  bullet.position.z =
    getExtentFrontY(objectExtent, bullet.position.x) + 0.1 - bullet.parent!.position.z;

  markAsDying(bullet);

  setTimeout(() => bullet.removeFromParent(), dim.playerBulletDyingDuration * 1000);
}

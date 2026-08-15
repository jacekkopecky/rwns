import * as THREE from 'three';

import * as dim from '#dimensions';

import { Circle } from '../../types';
import { rotateAlways } from '../animations';
import { createBulletModel, explosionTemplate } from '../models';
import { getExtentFrontY, markAsDying } from '../resources';

export function createBullet(player: THREE.Object3D): THREE.Object3D {
  const bullet = createBulletModel(recycledBullets.pop());

  bullet.userData.type = 'bullet';
  bullet.userData.extent2d ??= new Circle(undefined, dim.modelSizes.bullet[1] / 2);

  const yTranslation = (player.userData.gunHeight ?? dim.modelSizes.player[1] / 2) as number;
  bullet.userData._yTranslation = yTranslation;
  bullet.translateY(yTranslation);

  if (!bullet.userData._action) {
    const action = rotateAlways(bullet, dim.bulletRotationsPerSecond, 'z');
    bullet.userData._action = action;
    bullet.addEventListener('removed', () => {
      action.paused = true;
    });
  } else {
    (bullet.userData._action as THREE.AnimationAction).paused = false;
  }

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

  setTimeout(() => {
    bullet.removeFromParent();
    recycleBullet(bullet);
  }, dim.playerBulletDyingDuration * 1000);
}

export function recycleBullet(bullet: THREE.Object3D) {
  if (bullet instanceof THREE.Mesh) {
    markAsDying(bullet, false);
    recycledBullets.push(bullet as THREE.Mesh);
    if (typeof bullet.userData._yTranslation === 'number') {
      bullet.translateY(-bullet.userData._yTranslation);
      bullet.userData._yTranslation = undefined;
    }
  }
}

export function freeRecycledBullets() {
  recycledBullets.length = 0;
}

const recycledBullets: THREE.Mesh[] = [];

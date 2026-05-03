import * as THREE from 'three';

import * as dim from '#dimensions';
import { random } from '#utils';

import { createObject } from '../three/run-objects';
import { getObjectData } from '../types';
import { scaleExtent } from '../three/resources';

export function makeTrees(length: number, treesPerTreeWidth: number, hp: number): THREE.Object3D[] {
  const objects = [];
  const treeWidth = dim.modelSizes.conifer[0];
  const N = Math.round(length / (treeWidth / treesPerTreeWidth)) + 1;

  const usableWidth = dim.trackWidth - treeWidth;

  for (let i = 0; i <= N; i++) {
    const x = random() * usableWidth - usableWidth / 2;
    const y = (-i * length) / N;

    const obj = createObject('tree');
    const oData = getObjectData(obj);
    obj.position.x = x;
    obj.position.z = y;

    oData.hitPoints = hp;
    // let the player "rub shoulders" with the tree
    scaleExtent(oData.extent2d, 0.9);

    objects.push(obj);
  }

  return objects;
}

export function makeGem() {
  const obj = createObject('gems');
  const oData = getObjectData(obj);

  oData.hitPoints = dim.gemHitPoints;
  oData.benign = true;
  oData.award = { type: 'gem', amount: 1 };
  oData.useForAward = true;
  return obj;
}

export function makeBag(amount: number) {
  const obj = createObject('coins');
  const oData = getObjectData(obj);

  oData.collectible = true;
  oData.award = { type: 'coin', amount };
  // make the reach of coins bigger to be easier to collect
  scaleExtent(oData.extent2d, 3);

  return obj;
}

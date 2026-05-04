import * as THREE from 'three';

import * as dim from '#dimensions';
import { random } from '#utils';

import { createObject } from '../three/run-objects';
import { getObjectData } from '../types';
import { scaleExtent } from '../three/resources';

export function makeTrees(
  length: number,
  treesPerTreeWidth: number,
  hp: number,
  minHP = hp,
): THREE.Object3D[] {
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

    // trees hit points vary from hp/2 (at least minHP) to hp
    const objectHP = hp === minHP ? hp : Math.max(minHP, (1 - random() / 2) * hp);
    oData.hitPoints = objectHP;
    // let the player "rub shoulders" with the tree
    scaleExtent(oData.extent2d, 0.9);

    objects.push(obj);
  }

  return objects;
}

export function makeGem(hp: number) {
  const obj = createObject('gems');
  const oData = getObjectData(obj);

  oData.hitPoints = hp;
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

export function makeEndBlocks(startZ: number, rows: number, maxHP: number, objectHP: number) {
  const objects = [];

  const blockWidth = dim.trackWidth / dim.bouldersPerEndRow;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < dim.bouldersPerEndRow; j += 1) {
      const block = createObject('endBlock', i / (rows - 1));
      block.position.x = j * blockWidth + blockWidth / 2 - dim.trackWidth / 2;
      block.position.z = startZ - (i + 1) * blockWidth * 1.5;

      const oData = getObjectData(block);
      oData.hitPoints = THREE.MathUtils.lerp(objectHP, maxHP, (i + 1) / rows);

      objects.push(block);
    }
  }

  console.log('max end block HP', maxHP);

  return objects;
}

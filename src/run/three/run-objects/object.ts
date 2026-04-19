import * as THREE from 'three';

import { markAsDying } from '../resources';

import { createGem, killGem } from './gems';
import { createBag, killBag } from './money';
import { createRandomTree, killTree } from './tree';

const typeFns = {
  tree: [createRandomTree, killTree],
  gems: [createGem, killGem],
  coins: [createBag, killBag],
} as const;

export function createObject(type: 'tree' | 'gems' | 'coins'): THREE.Object3D {
  const retval = typeFns[type][0]();
  retval.userData._createObject_type = type;
  return retval;
}

export function killObject(obj: THREE.Object3D, givingAward = false) {
  const type = obj.userData._createObject_type as keyof typeof typeFns;

  markAsDying(obj);
  typeFns[type][1](obj, givingAward);
}

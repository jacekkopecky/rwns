import type * as THREE from 'three';

import { getObjectData } from '../../types';
import { createHitBar } from '../models';
import { markAsDying } from '../resources';

import { createButterfly } from './butterflies';
import { createEndBlock, killEndBlock } from './end-blocks';
import { createGate, killGate } from './gate';
import { createGem, killGem } from './gems';
import { createBag, killBag } from './money';
import { createRandomTree, killTree } from './tree';

const typeFns = {
  butterfly: [createButterfly, () => undefined],
  tree: [createRandomTree, killTree],
  gems: [createGem, killGem],
  coins: [createBag, killBag],
  gate: [createGate, killGate],
  endBlock: [createEndBlock, killEndBlock],
} as const;

export function createObject<T extends keyof typeof typeFns>(
  type: T,
  ...args: Parameters<(typeof typeFns)[T][0]>
): THREE.Object3D {
  // @ts-expect-error ...args complains about the spread but it's OK
  const retval = typeFns[type][0](...args);
  retval.userData.objectSubtype = type;

  if (retval.userData.type !== 'object') throw new Error(`${retval.userData.type}`);
  if (retval.userData.height) {
    retval.add(createHitBar().translateY(retval.userData.height as number));
  }

  return retval;
}

export function killObject(obj: THREE.Object3D, givingAward = false) {
  const type = obj.userData.objectSubtype as keyof typeof typeFns;

  markAsDying(obj);
  typeFns[type][1](obj, givingAward);

  // if we're using a subobject for award, also kill it (so e.g. gems are now collected)
  const oData = getObjectData(obj);
  for (const award of oData.awards ?? []) {
    if (typeof award.useForAward === 'string') {
      const subObj = obj.getObjectByName(award.useForAward);
      if (subObj) {
        killObject(subObj, givingAward);
      }
    }
  }
}

export function isOfType(obj: THREE.Object3D, type: string) {
  return obj.userData.objectSubtype === type;
}

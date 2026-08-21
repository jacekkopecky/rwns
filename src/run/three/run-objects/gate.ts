import * as THREE from 'three';

import * as dim from '#dimensions';

import type { ObjectData } from '../../types';
import { slideIntoGround } from '../animations';
import { createGateModel } from '../models';

interface GateData extends ObjectData {
  gateType: dim.Gate;
}

export function createGate(type: dim.Gate, callback: (player?: THREE.Object3D) => void) {
  const { w, d = 1, color } = dim.gateTypes[type];
  const gate = createGateModel(w, color);

  gate.userData.extent2d = new THREE.Box2(
    new THREE.Vector2(-w / 2, -d),
    new THREE.Vector2(w / 2, 1),
  );
  const oData = gate.userData as GateData;
  oData.type = 'object';
  oData.gateType = type;
  oData.onPlayerCollision = callback;
  oData.damagesPlayer = false;
  oData.getsDamageFromPlayer = false;
  oData.givesAwardOnPlayerContact = true;
  oData.height = dim.modelSizes.gatePost[1];

  return gate;
}

export function killGate(obj: THREE.Object3D) {
  slideIntoGround(obj, dim.objectDyingDuration);
}

export function isEndGate(gate: THREE.Object3D) {
  return (gate.userData as GateData).gateType === 'end';
}

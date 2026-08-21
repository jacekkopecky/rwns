import type * as THREE from 'three';

import type { Currency } from '#types';

import type { Circle } from './circle';

interface AnyObjectData {
  extent2d: THREE.Box2 | Circle;
}

export interface PlayerData extends AnyObjectData {
  type: 'player';
  shotTime: number;
  remainingShotTime: number;
  range: number;
  bulletHitPoints: number;
  hitPoints: number;
}

export interface BulletData extends AnyObjectData {
  type: 'bullet';
  minZ: number;
  hitPoints: number;
}

export interface Award extends Currency {
  // whether to use this object (or a named subobject) for the award animation two awards shouldn't use the same object
  useForAward?: boolean | string;
}

export interface ObjectData extends AnyObjectData {
  type: 'object';
  id?: string;
  hitPoints: number;
  maxHitPoints: number; // indicates that we should show and update a hitBar
  height?: number; // an object may not have a known height

  // behavior flags
  ignoresBullets?: boolean; // bullets can fly right through (or over/under)
  damagesPlayer?: boolean;
  getsDamageFromPlayer?: boolean; // otherwise contact with player doesn't affect the object's HP
  destroyedOnPlayerContact?: boolean; // no effect on any HP
  givesAwardOnPlayerContact?: boolean; // independent of the object's or the player's HP
  givesAwardOnDeathByDamage?: boolean; // whether from bullet damage or from player contact, if either damages the object

  awards?: Award[];
  // a function to call when a player hits the object
  onPlayerCollision?: (player?: THREE.Object3D) => void;
}

export function getPlayerData(obj: THREE.Object3D): PlayerData {
  return getUserData(obj, 'player') as PlayerData;
}

export function getBulletData(obj: THREE.Object3D): BulletData {
  return getUserData(obj, 'bullet') as BulletData;
}

export function getObjectData(obj: THREE.Object3D): ObjectData {
  return getUserData(obj, 'object') as ObjectData;
}

function getUserData(obj: THREE.Object3D, type: string) {
  const userData = obj.userData;
  if (userData.type === type) {
    return userData;
  } else {
    throw new TypeError(`expecting object type ${type}, got "${userData.type}"`);
  }
}

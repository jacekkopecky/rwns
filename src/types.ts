import * as THREE from 'three';

interface AnyObjectData {
  width: number;
  depth: number;
}

export interface PlayerData extends AnyObjectData {
  type: 'player';
  shotTime: number;
  remainingShotTime: number;
  range: number;
  bulletLength: number;
  hitPoints: number;
}

export interface BulletData extends AnyObjectData {
  type: 'bullet';
  minZ: number;
  length: number;
  hitPoints: number;
}

export interface ObjectData extends AnyObjectData {
  type: 'object';
  dying?: boolean;
  hitPoints: number;
}

export interface PlayerGroupData extends AnyObjectData {
  type: 'playersGroup';
}

export function getPlayerGroupData(obj: THREE.Object3D): PlayerGroupData {
  return getUserData(obj, 'playersGroup');
}

export function getPlayerData(obj: THREE.Object3D): PlayerData {
  return getUserData(obj, 'player');
}

export function getBulletData(obj: THREE.Object3D): BulletData {
  return getUserData(obj, 'bullet');
}

export function getObjectData(obj: THREE.Object3D): ObjectData {
  return getUserData(obj, 'object');
}

function getUserData(obj: THREE.Object3D, type: string): any {
  const userData = obj.userData;
  if (userData.type === type) {
    return userData;
  } else {
    throw new TypeError(`expecting object type ${type}, got "${userData.type}"`);
  }
}

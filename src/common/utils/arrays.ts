import * as THREE from 'three';

export function* range(n: number) {
  for (let i = 0; i < n; i += 1) {
    yield i;
  }
}

export function getByName<T extends THREE.Object3D>(objects: T[], name: string) {
  const retval = objects.find((obj) => obj.name === name);
  if (!retval) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}

export function indexByName<T extends THREE.Object3D>(objects: T[], name: string) {
  const retval = objects.findIndex((obj) => obj.name === name);
  if (retval < 0) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}

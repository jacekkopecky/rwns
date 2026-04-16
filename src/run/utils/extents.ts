import * as THREE from 'three';
import { Circle } from '../types';

const extentMaterial = new THREE.MeshLambertMaterial({ color: 0x000000, wireframe: true });

export function showExtents(objects: THREE.Object3D[]) {
  for (const obj of [...objects]) {
    if (obj.type !== 'Sprite') showExtent(obj);
  }
}

export function showExtent(obj: THREE.Object3D<THREE.Object3DEventMap>) {
  const extentView = createExtentWireframe(obj.userData.extent2d);
  extentView.rotateX(Math.PI / 2);
  extentView.position.y = -obj.position.y + 0.1;
  extentView.userData.isExtent = true;
  obj.add(extentView);
}

const _vector = new THREE.Vector2();

function createExtentWireframe(extent: THREE.Box2 | Circle): THREE.Object3D {
  if (extent instanceof Circle) {
    const g = new THREE.CircleGeometry(extent.radius, 16);
    return new THREE.Mesh(g, extentMaterial);
  } else {
    extent.getSize(_vector);
    const g = new THREE.PlaneGeometry(_vector.x, _vector.y);
    return new THREE.Mesh(g, extentMaterial);
  }
}

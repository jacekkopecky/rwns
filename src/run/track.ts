import * as THREE from 'three';

import { createTrackDecorations, moveTrackDecorations } from './three/run-objects';

const trackGroup = new THREE.Group();

export function setupTrack() {
  trackGroup.clear();
  trackGroup.position.set(0, 0, 0);
  createTrackDecorations(trackGroup);

  return trackGroup;
}

export function moveTrack(delta: number) {
  moveTrackDecorations(trackGroup, delta);
}

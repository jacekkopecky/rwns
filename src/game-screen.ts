import * as THREE from 'three';

import { disposeAnimations, shrinkToGone, updateAnimations } from './animations.js';
import {
  behindCamera,
  cameraToTrackEndLength,
  FINGER_WIDTH_PERCENT,
  N,
  objectDyingDuration,
  objectSpeedPerSecond,
  startDistance,
  trackLength,
  trackWidth,
} from './dimensions.js';
import { logFps } from './log.js';
import { dispose, render, scene, setScene, setupThree, timer } from './three.js';
import { createObject, createTrack, getSpriteMaterial } from './three-resources.js';
import { TouchHandler } from './touch-handler.js';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webgl-canvas')!,
};

let handler: TouchHandler | null = null;

let objectsGroup: THREE.Group;
let playerGroup: THREE.Object3D;

export function start() {
  if (!handler) {
    handler = new TouchHandler(el.main, {
      initialX: 50,
      speedUp: 1 + FINGER_WIDTH_PERCENT / 100,
      onMove: updatePlayerPosition,
    });
    handler.toggle(false);
    el.canvas.addEventListener('click', () => togglePlaying());
    setupThree(el.main);
    setupScene();
    setupObjects();
  }
  setTimeout(() => render(), 100);
}

function isPlaying() {
  return el.canvas.classList.contains('playing');
}

function togglePlaying(value?: boolean) {
  const playing = value ?? !isPlaying();
  el.canvas.classList.toggle('playing', playing);
  handler?.toggle(playing);

  if (!playing) {
    setupObjects();
    disposeAnimations();
  } else {
    animationFrame();
  }
}

function setupScene() {
  const s = new THREE.Scene();
  s.background = new THREE.Color(0xb0b0b0);

  s.fog = new THREE.Fog(
    s.background,
    cameraToTrackEndLength - trackLength * 0.2,
    cameraToTrackEndLength,
  );

  s.add(createTrack());

  playerGroup = createObject('player');
  (window as any).jacek = playerGroup;
  s.add(playerGroup);

  setScene(s);
}

function setupObjects() {
  if (objectsGroup) {
    scene.remove(objectsGroup);
    dispose(objectsGroup);
  }

  objectsGroup = new THREE.Group();
  scene.add(objectsGroup);

  for (let i = 0; i < N; i++) {
    const x = Math.random() * 80 - 40;
    const y = -(trackLength / N) * i + startDistance;

    const obj = createObject('object');
    obj.position.x = x;
    obj.position.z = y;
    objectsGroup.add(obj);
  }
}

function animationFrame(ms?: number) {
  if (isPlaying()) {
    if (ms != null) {
      timer.update(ms);
      const delta = timer.getDelta();
      updateAnimations(delta);
      moveObjects(delta);
      moveBullets(delta);
    } else {
      timer.reset();
    }
    render();
    logFps(ms, `${objectsGroup.children.length}: `);
    requestAnimationFrame(animationFrame);
  }
}

function moveObjects(delta: number) {
  const deltaZ = objectSpeedPerSecond * delta;
  objectsGroup.position.z += deltaZ;

  // remove objects that are now behind the camera
  for (const child of objectsGroup.children) {
    if (getObjectZ(child) > behindCamera) {
      child.removeFromParent();
    } else {
      // the objects are sorted front-to-back so no more will be behind camera
      break;
    }
  }
}

function getObjectZ(obj: THREE.Object3D) {
  return objectsGroup.position.z + obj.position.z;
}

function moveBullets(delta: number) {
  for (const child of objectsGroup.children) {
    if (isSprite(child) && getObjectZ(child) > -20) {
      if (!child.userData.dying && isObjectBeforePlayer(child)) {
        child.material = getSpriteMaterial('objectDying');
        child.userData.dying = true;
        shrinkToGone(child, objectDyingDuration);
      }
    } else {
      // no more children close enough;
      break;
    }
  }
}

function isObjectBeforePlayer(obj: THREE.Object3D): boolean {
  return (
    getObjectZ(obj) < 0 &&
    Math.abs(obj.position.x - playerGroup.position.x) < (obj.userData.width / 2 || 1)
  );
}

function isSprite(obj?: THREE.Object3D): obj is THREE.Sprite {
  return Boolean(obj && 'isSprite' in obj && obj.isSprite);
}

export function end() {
  togglePlaying(false);
}

function updatePlayerPosition(playerPercent: number) {
  let x = ((playerPercent - 50) * trackWidth) / 100;
  const bound = (trackWidth - (playerGroup.userData.width ?? 0)) / 2;
  if (x < -bound) x = -bound;
  if (x > bound) x = bound;
  playerGroup.position.x = x;
}

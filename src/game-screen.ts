import * as THREE from 'three';

import {
  behindCamera,
  cameraToTrackEndLength,
  FINGER_WIDTH_PERCENT,
  N,
  objectSpeedPerSecond,
  START_BEYOND,
  trackLength,
  trackWidth,
} from './dimensions.js';
import { logFps } from './log.js';
import { camera, dispose, renderer, setupThree, timer } from './three.js';
import { createObject, createTrack } from './three-resources.js';
import { TouchHandler } from './touch-handler.js';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webgl-canvas')!,
};

let handler: TouchHandler | null = null;

let scene: THREE.Scene;
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
  } else {
    animationFrame();
  }
}

function setupScene() {
  if (scene) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xb0b0b0);

  scene.fog = new THREE.Fog(
    scene.background,
    cameraToTrackEndLength - trackLength * 0.2,
    cameraToTrackEndLength,
  );

  scene.add(createTrack());

  playerGroup = createObject('player');
  (window as any).jacek = playerGroup;
  scene.add(playerGroup);
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
    const y = -(trackLength / N) * i - (START_BEYOND ? trackLength : 50);

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
      moveObjectsOnAnimationFrame(timer.getDelta());
    } else {
      timer.reset();
    }
    render();
    logFps(ms, `${N}: `);
    requestAnimationFrame(animationFrame);
  }
}

function moveObjectsOnAnimationFrame(delta: number) {
  const deltaZ = objectSpeedPerSecond * delta;
  objectsGroup.position.z += deltaZ;

  // remove objects that are now behind the camera
  const groupZ = objectsGroup.position.z;

  for (const child of objectsGroup.children) {
    if (groupZ + child.position.z > behindCamera) {
      child.removeFromParent();
    } else {
      // the objects are sorted front-to-back so no more will be behind camera
      break;
    }
  }
}

function render() {
  renderer.render(scene, camera);
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

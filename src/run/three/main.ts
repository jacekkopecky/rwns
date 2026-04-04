import * as THREE from 'three';

import { camera, initCamera } from './camera';

export let renderer: THREE.WebGLRenderer;
export const scene = new THREE.Scene();

export const timer = new THREE.Timer();
timer.connect(document);

export function init(main: HTMLElement) {
  const canvas = main.querySelector('canvas');
  if (!canvas) {
    throw new Error('cannot work without a canvas');
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  initCamera(canvas);

  (window as any).gameScene = scene;
  (window as any).renderer = renderer;

  onWindowResize();

  window.addEventListener('resize', onWindowResize);

  function onWindowResize() {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(main.clientWidth, main.clientHeight);

    camera.aspect = main.clientWidth / main.clientHeight;
    camera.updateProjectionMatrix();

    render();
  }

  return () => {
    window.removeEventListener('resize', onWindowResize);
  };
}

export function render(showStats?: boolean) {
  if (!scene) {
    console.warn('render called before setting the scene');
    return;
  }
  renderer.render(scene, camera);
  if (showStats) {
    console.log('triangles', renderer.info.render.triangles);
  }
}

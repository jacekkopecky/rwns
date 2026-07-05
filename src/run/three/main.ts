import * as THREE from 'three';

import * as dim from '#dimensions';
import { exposeGlobalWindowProp } from '#utils';

import { camera, initCamera } from './camera';

export let renderer: THREE.WebGLRenderer;
export const scene = new THREE.Scene();

export function init(main: HTMLElement) {
  const canvas = main.querySelector('#run canvas') as HTMLCanvasElement;
  if (!canvas) {
    throw new Error('cannot work without a canvas');
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.shadowMap.enabled = dim.shadowsEnabled;

  initCamera(canvas);

  exposeGlobalWindowProp('gameScene', scene);
  exposeGlobalWindowProp('gameRenderer', renderer);

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
  renderer.render(scene, camera);
  if (showStats) {
    console.log('triangles', renderer.info.render.triangles);
  }
}

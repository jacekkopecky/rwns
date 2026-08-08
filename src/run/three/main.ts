import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as dim from '#dimensions';
import { exposeGlobalWindowProp } from '#utils';

import { camera, initCamera } from './camera';

export let renderer: THREE.WebGLRenderer;
export const scene = new THREE.Scene();

export function init(main: HTMLElement) {
  const canvas = main.querySelector('canvas');
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

function doRender(showStats?: boolean) {
  renderer.render(scene, camera);
  if (showStats) {
    console.log('triangles', renderer.info.render.triangles);
  }
}

// by default do not render when running tests
export const render = window.RWNS_TESTS ? () => undefined : doRender;

exposeGlobalWindowProp('gameDoRender', doRender);

let controls: OrbitControls | undefined;
export function toggleControls(enabled = true) {
  if (!controls) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => render());
    controls.screenSpacePanning = true;
    controls.zoomToCursor = true;
  }

  controls.enabled = enabled;
}

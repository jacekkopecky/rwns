import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { init as initRunScreen, prepareRun } from '../run';
import { playersGroup } from '../run/players';
import { camera } from '../run/three/camera';
import { render, renderer } from '../run/three/main';
import * as state from '../state';

state.initState();
initRunScreen();

let players = 0;
let walking = true;
state.setRunUpgradeLevel('players', players);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => render());
controls.screenSpacePanning = true;
controls.zoomToCursor = true;

const cameraPos = new THREE.Vector3(2.3, 24, -17);

controls.target.set(0, 10, 0);

window.addEventListener('resize', onWindowResize);
prepRun();
animate();

function setup() {
  camera.position.copy(cameraPos);
  updateWalking();
}

function updateWalking(value = true) {
  walking = value;
  playersGroup.children.forEach((p) => p.userData.marvin.setWalking(walking));
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  // cameraHelper.update();
  render();
}

document.body.addEventListener('keydown', (e) => {
  cameraPos.copy(camera.position);
  if (e.key === 'ArrowRight') {
    state.setRunUpgradeLevel('players', ++players);
    prepRun();
  } else if (e.key === 'ArrowLeft') {
    players = Math.max(--players, 0);
    state.setRunUpgradeLevel('players', players);
    prepRun();
  } else if (e.key === ' ') {
    updateWalking(!walking);
  }
});

function prepRun() {
  prepareRun({
    state: state.readState(),
    params: state.getUpgradablePermanentParameters(),
    type: 'normal',

    onRetry() {
      /* nothing */
    },
    onProgress() {
      /* nothing */
    },
  });
  setup();
}

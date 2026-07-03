import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { init as initRunScreen, prepareRun } from '../run';
import { playersGroup } from '../run/players';
import { camera } from '../run/three/camera';
import { render, renderer } from '../run/three/main';
import * as state from '../state';

state.initState();
initRunScreen();

let players = 0;
state.setRunUpgradeLevel('players', players);

prepareRun(state.readState(), state.getUpgradablePermanentParameters());

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => render());
controls.screenSpacePanning = true;
controls.zoomToCursor = true;

window.addEventListener('resize', onWindowResize);
setup();
animate();

function setup() {
  camera.position.set(2.3, 24, -17);
  controls.target.set(0, 10, 0);
  playersGroup.children.forEach((p) => p.userData.marvin.startWalking());
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
  if (e.key === 'ArrowRight') {
    state.setRunUpgradeLevel('players', ++players);
    prepareRun(state.readState(), state.getUpgradablePermanentParameters());
    setup();
  } else if (e.key === 'ArrowLeft') {
    players = Math.max(--players, 0);
    state.setRunUpgradeLevel('players', players);
    prepareRun(state.readState(), state.getUpgradablePermanentParameters());
    setup();
  }
});

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { init as initRunScreen, prepareRun } from '../run';
import * as state from '../state';
import { camera } from '../run/three/camera';
import { render, renderer } from '../run/three/main';

state.initState();
initRunScreen();
prepareRun(state.readState(), state.getUpgradablePermanentParameters());

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => render());
controls.screenSpacePanning = true;
controls.zoomToCursor = true;

window.addEventListener('resize', onWindowResize);
animate();

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

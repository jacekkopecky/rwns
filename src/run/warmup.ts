import { updateAnimations } from './three/animations';
import { render, scene } from './three/main';
import { createPlayer, killPlayer } from './three/run-objects';

// for now only kill player so it doesn't cause lag the first time

export function warmupModels() {
  scene.clear();
  const p = createPlayer();
  scene.add(p);
  animate();
  killPlayer(p);
  animate();
}

function animate() {
  render();
  for (let i = 0; i < 3; i++) {
    updateAnimations(0.1);
    render();
  }
}

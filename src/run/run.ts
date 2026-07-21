import * as THREE from 'three';

import * as dim from '#dimensions';
import { logFps } from '#log';
import type { ReadonlyState, RunType, UpgradablePermanentParameters } from '#types';
import { getEl, resetRandom } from '#utils';

import { showSection, startPlaying } from '../sections';
import { isOnSplashScreen } from '../splash-screen';
import * as stateModule from '../state';

import {
  awardsGroup,
  isWin,
  setupAwards,
  toggleEndRunScreen,
  updateAwardsView,
  updateEndRunScreenAwards,
  updateEndRunScreenGemCount,
} from './awards';
import { bulletsGroup, movePlayerBullets, setupBullets } from './bullets';
import { dyingGroup, moveAndSweepDyingGroup, setupDyingGroup } from './dying-group';
import { moveObjects, objectsGroup, setupObjects } from './objects';
import {
  checkPlayersHit,
  playersGroup,
  playerShoot,
  setPlayersWalking,
  setupPlayers,
  updatePlayerPosition,
} from './players';
import { disposeAnimations, timer, updateAnimations } from './three/animations';
import { moveCamera } from './three/camera';
import { init as initThree, render, scene } from './three/main';
import { initSpriteMaterials } from './three/materials';
import { moveTrack, setupTrack } from './track';
import { showExtents } from './utils/extents';
import { TouchHandler } from './utils/touch-handler';
import { warmupModels } from './warmup';

let handler: TouchHandler;

let playing = false;
let ending = false;
let currentRun: RunOptions;

const el = {
  main: getEl('main'),
  canvas: getEl('#webglCanvas'),
  quitBtn: getEl('#quitBtn', HTMLButtonElement),
  shortMessage: getEl('#shortMessage'),
  endRunScreenProgress: getEl('#endRunScreen button.progress', HTMLButtonElement),
  endRunScreenRetry: getEl('#endRunScreen button.retry', HTMLButtonElement),
};

/**
 * First-time initialization.
 */
export function init() {
  initThree(el.main);
  warmup();
  animationFrame();

  handler = new TouchHandler(el.canvas, {
    speedUp: 1 + dim.FINGER_WIDTH_PERCENT / 100,
    onMoveBy: updatePlayerPosition,
  });
  updateTouchHandlerEnabled();

  el.quitBtn.addEventListener('click', (e) => {
    if (playing) {
      endRun(true);
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
      el.quitBtn.disabled = true;
    }
  });
  el.endRunScreenProgress.addEventListener('click', nextLevel);
  el.endRunScreenRetry.addEventListener('click', retry);

  el.canvas.addEventListener('touchstart', handleStartTouch);
  el.canvas.addEventListener('mousedown', handleStartTouch);
}

export function warmup() {
  warmupModels();
  initSpriteMaterials();
  setupScene();
}

function updateTouchHandlerEnabled() {
  handler.toggle(playing && !ending);
}

function setupScene() {
  scene.clear();
  scene.background = new THREE.Color(0xb0c0d0);

  scene.fog = new THREE.Fog(
    scene.background,
    dim.cameraToTrackEndLength - dim.trackLength * 0.2,
    dim.cameraToTrackEndLength,
  );

  // lights
  const skylight = new THREE.HemisphereLight(0xffffff, 0xb97a20, 1);
  scene.add(skylight);

  const sunlight = new THREE.DirectionalLight(0xffffff, 3);
  // if we change light position, we may need to update shadow camera below
  sunlight.position.set(40, 40, 20);
  scene.add(sunlight);

  if (dim.shadowsEnabled) {
    sunlight.castShadow = true;

    sunlight.shadow.camera.left = -dim.behindCamera;
    sunlight.shadow.camera.right = dim.trackLength;
    sunlight.shadow.camera.top = 40;
    sunlight.shadow.camera.bottom = -40;
    sunlight.shadow.camera.near = 1;
    sunlight.shadow.camera.far = 200;
    sunlight.shadow.bias = -0.01;
    sunlight.shadow.camera.up = new THREE.Vector3(-1, 1, 0).normalize();

    // set shadow texture size for crisper shadows
    sunlight.shadow.mapSize.set(2048, 256);
  }

  scene.add(awardsGroup);
  scene.add(objectsGroup);
  scene.add(playersGroup);
  scene.add(bulletsGroup);
  scene.add(dyingGroup);
  scene.add(setupTrack());
}

interface RunOptions {
  state: ReadonlyState;
  params: UpgradablePermanentParameters;
  objects?: Pick<Parameters<typeof setupObjects>[0], 'customMessage'>;
  endButtons?: {
    // "" hides and disables the button
    retry: string;
    hideRetryOnWin?: boolean;
    progress: string;
  };
  type: RunType;
  onRetry: (win: boolean) => void;
  onProgress: () => void;
}

/**
 * make objects, reset in-run scores, show
 */
export function prepareRun(opts: RunOptions) {
  const { state, params } = opts;

  resetRandom(stateModule.getLevelRandomSeed(state, opts.type));

  disposeAnimations();

  setupAwards();
  const levelInfo = setupObjects({
    state,
    params,
    onFinish: () => endRun(true, true),
    ...opts.objects,
  });
  el.shortMessage.textContent = levelInfo.msg;
  updateEndRunScreenGemCount(levelInfo.gemCount);

  // set up players after objects so player upgrades and positioning, which may use randomness, don't affect object randomness
  setupPlayers(state, params);
  setupBullets();
  setupDyingGroup();

  currentRun = opts;
  playing = false;
  updateTouchHandlerEnabled();

  if (dim.options.showingExtents) {
    showExtents(playersGroup.children);
    showExtents(objectsGroup.children);
  }

  render(true);
}

function handleStartTouch() {
  // this is called on every mousedown/touchstart on the canvas, so return fast
  if (playing) return;

  if (startPlaying()) showSection('run');
}

export function showRunSection() {
  el.endRunScreenProgress.disabled = false;
  el.endRunScreenRetry.disabled = false;
  doStartRun();
}

function doStartRun() {
  if (!playing) {
    stateModule.increasePlayed(currentRun.type);
  }

  playing = true;
  ending = false;
  el.quitBtn.disabled = false;
  updateTouchHandlerEnabled();
  setPlayersWalking(true);
}

function endRun(immediate = false, win = false) {
  if (!playing || ending) return;

  ending = true;
  el.quitBtn.disabled = true;

  updateTouchHandlerEnabled();
  updateEndRunScreenAwards();

  el.endRunScreenProgress.textContent = currentRun.endButtons?.progress ?? 'Next level';
  el.endRunScreenRetry.textContent = currentRun.endButtons?.retry ?? 'Play again';

  el.endRunScreenProgress.classList.toggle('hidden', currentRun.endButtons?.progress === '');
  el.endRunScreenRetry.classList.toggle(
    'hidden',
    currentRun.endButtons?.retry === '' || (win && Boolean(currentRun.endButtons?.hideRetryOnWin)),
  );

  setTimeout(
    () => {
      toggleEndRunScreen(true, win);

      setTimeout(() => {
        playing = false;
        setPlayersWalking(false);
      }, 1000);
    },
    immediate ? 0 : 1000,
  );
}

function nextLevel() {
  el.endRunScreenProgress.disabled = true;
  el.endRunScreenRetry.disabled = true;
  currentRun.onProgress();
}

function retry() {
  el.endRunScreenProgress.disabled = true;
  el.endRunScreenRetry.disabled = true;
  currentRun.onRetry(isWin());
}

function isGameFinished() {
  const lose = playersGroup.children.length === 0;
  const win = !lose && objectsGroup.children.length === 0 && dyingGroup.children.length === 0;

  return win ? 'win' : lose;
}

// const fpsDivider = 10;
// let fpsLimiter = fpsDivider - 1;

// let lastTime = 0;

function animationFrame(ms?: number) {
  // if (ms) {
  //   if (lastTime && ms - lastTime > 20) {
  //     console.log('extra ms', ms - lastTime);
  //   }
  //   lastTime = ms;
  // }

  requestAnimationFrame(animationFrame);

  // fpsLimiter = (fpsLimiter + 1) % fpsDivider;
  // if (fpsLimiter > 0) return;

  timer.update(ms);
  if (isOnSplashScreen()) return;

  if (ms != null) {
    const delta = timer.getDelta();
    updateAnimations(delta);
    moveCamera();

    if (playing) {
      moveObjects(delta);
      moveTrack(delta);
      checkPlayersHit();
      playerShoot(delta);
      movePlayerBullets(delta);
      moveAndSweepDyingGroup(delta);
      updateAwardsView(delta);

      const finished = isGameFinished();
      if (finished) {
        endRun(false, finished === 'win');
      }
    }
  }
  render();

  if (playing && dim.options.fpsLogging) logFps(ms, `${objectsGroup.children.length}: `);
}

import { TouchHandler } from './touch-handler.js';

const el = {
  log: document.querySelector('#log')!,
  startBtn: document.querySelector('#startBtn')!,
  endBtn: document.querySelector('#exitBtn')!,
  player: document.querySelector<HTMLElement>('#player')!,
  main: document.querySelector('main')!,
};

document.body.addEventListener('keyup', handleTopLevelSpaceKey);
el.startBtn.addEventListener('click', goFullscreen);
el.endBtn.addEventListener('click', exit);

function goFullscreen() {
  el.main.requestFullscreen();
}

function exit() {
  document.exitFullscreen();
  // todo we'll probably want to use the handler only during main game
  handler.shutdown();
}

function handleTopLevelSpaceKey(e: KeyboardEvent): void {
  if (e.key === ' ' && !document.fullscreenElement) {
    goFullscreen();
  }
}

const playerMargin = 10;
let playerX = 50;

const handler = new TouchHandler(el.main, {
  initialX: playerX,
  marginX: playerMargin,
  onMove(currX) {
    playerX = currX;
    updateView();
  },
});

function updateView() {
  el.player.style.transform = `translateX(${playerX - 50}%)`;
}

function log(str: string) {
  el.log.textContent += '\n' + str;
}

log('log');

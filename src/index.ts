document.body.addEventListener('keyup', handleTopLevelSpaceKey);
document.querySelector('#startBtn')?.addEventListener('click', goFullscreen);
document.querySelector('#exitBtn')?.addEventListener('click', exitFullscreen);

function goFullscreen() {
  document.querySelector('main')?.requestFullscreen();
}

function exitFullscreen() {
  document.exitFullscreen();
}

function handleTopLevelSpaceKey(e: KeyboardEvent): void {
  if (e.key === ' ' && !document.fullscreenElement) {
    goFullscreen();
  }
}

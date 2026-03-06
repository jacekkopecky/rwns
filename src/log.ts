const logEl = document.querySelector('#log');

export function log(str: string) {
  if (!logEl) return;

  logEl.textContent += '\n' + str;
}

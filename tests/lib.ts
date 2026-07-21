import { expect, type Page } from '@playwright/test';

import type { PickedPartial, SerializedState } from '#types';

interface InitOptions {
  state?: PickedPartial<Partial<SerializedState>, 'sideGames'>;
  time?: string;
}

/**
 * Instrument the game with custom state (if given), console message forwarder,
 * and disabling all CSS transitions and animations.
 */
export async function initializePage(page: Page, options: InitOptions = {}) {
  const { state = {}, time = '2026-07-15T12:00:00Z' } = options;

  // pipe console messages
  page.on('console', (msg) => {
    const type = msg.type();
    const text = msg.text();
    if (type !== 'debug' && !text.includes('GPU stall')) {
      console.log(type.toUpperCase(), text);
    }
  });

  // initialize state localStorage
  await page.addInitScript((state) => {
    const key =
      'test_run_' +
      new Date().toISOString() +
      (Math.random() * 1000000).toFixed(0).padStart(6, '0');

    // set local state
    window.RWNS_LOCAL_STORAGE_KEY = key;
    localStorage.setItem(key, JSON.stringify(state));

    // tell the page to use splash screen and disable animations
    window.RWNS_TESTS = true;
  }, state);

  // install fake clock to a fixed date and pause it
  await page.clock.install({ time });
  await page.clock.pauseAt(time);
}

export async function waitForVersion(page: Page) {
  const versionEl = page.locator('#version .value');
  await expect(versionEl).toHaveText('unknown');
}

export async function waitForInitialization(page: Page) {
  const startBtn = page.locator('#startBtn');
  await expect(startBtn).toBeEnabled();
}

/**
 * Click "Start" on splash screen when it's enabled
 */
export async function startGame(page: Page) {
  await waitForInitialization(page);
  const startBtn = page.locator('#startBtn');
  await startBtn.click();
  await expect(startBtn).not.toBeVisible();
}

/**
 * Click at specific coordinates as a fraction of the screen width and height
 */
export async function clickScreen(page: Page, x: number, y: number) {
  const viewport = page.viewportSize();
  if (!viewport) {
    throw new Error('Viewport size is not available');
  }
  const clickX = viewport.width * x;
  const clickY = viewport.height * y;
  await page.mouse.click(clickX, clickY, { button: 'left' });
}

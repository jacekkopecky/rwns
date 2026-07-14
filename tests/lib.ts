import { expect, type Page } from '@playwright/test';

import type { SerializedState } from '#types/state';

interface InitOptions {
  state?: Partial<SerializedState>;
  time?: string;
}

/**
 * Instrument the game with custom state (if given), console message forwarder,
 * and disabling all CSS transitions and animations.
 */
export async function initializePage(page: Page, options: InitOptions = {}) {
  const { state = {}, time } = options;

  // pipe console messages
  page.on('console', (msg) => {
    const type = msg.type();
    const text = msg.text();
    if (type !== 'debug') {
      console.log(`BROWSER ${type.toUpperCase()}`, text);
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

  if (time) {
    // install fake clock to a fixed date
    await page.clock.install({ time });
  }
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

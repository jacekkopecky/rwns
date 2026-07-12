import { expect, type Page } from '@playwright/test';

import type { SerializedState } from '#types/state';

import { LOCAL_STORAGE_KEY } from '../src/state/constants';

/**
 * Instrument the game with custom state (if given), console message forwarder,
 * and disabling all CSS transitions and animations.
 */
export async function initializePage(page: Page, state: Partial<SerializedState> = {}) {
  // pipe console messages
  page.on('console', (msg) => {
    const type = msg.type();
    const text = msg.text();
    if (type === 'error' || type === 'warning' || type === 'info') {
      console.log(`BROWSER ${type.toUpperCase()}`, text);
    }
  });

  // initialize state localStorage
  await page.addInitScript(
    ([key, state]) => {
      // set local state
      localStorage.setItem(key, JSON.stringify(state));

      // tell the page to use splash screen
      window.RWNS_TESTS = true;

      // forcefully disable animations
      // it doesn't seem to trigger without the delay
      setTimeout(() => document.body.classList.add('TESTING'), 100);
    },
    [LOCAL_STORAGE_KEY, state] as const,
  );
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

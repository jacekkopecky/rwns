import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Level 1 tree collision', () => {
  test('player should die on hitting a tree in the first level', async ({ page }) => {
    await initializePage(page, {
      state: {
        level: 1,
      },
    });

    await page.addInitScript(() => {
      Math.random = () => 0.7; // reproducible behavior
    });

    await page.goto('./');
    await startGame(page);

    // click canvas to start run in level 1
    const canvas = page.locator('#webglCanvas');
    await canvas.click();

    // verify that playersGroup has a player in gameScene initially
    const hasPlayerInitial = await page.evaluate(() => {
      const scene = window.gameScene;
      const playersGroup = scene?.getObjectByName('playersGroup');
      return playersGroup?.children.some((child) => child.userData.type === 'player');
    });
    expect(hasPlayerInitial).toBe(true);

    // advance time by ~4.5 seconds while walking
    await page.clock.fastForward(4500);

    // drag left by ~10% of screen width
    const viewport = page.viewportSize();
    if (!viewport) {
      throw new Error('Viewport size not available');
    }

    const startX = viewport.width * 0.5;
    const endX = viewport.width * 0.4;
    const startY = viewport.height * 0.5;

    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(endX, startY, { steps: 1 });
    await page.mouse.up();

    // advance time to collide with the tree and trigger dying state
    await page.clock.fastForward(100);

    // render frame right after collision/death to capture dying screenshot
    await page.evaluate(() => {
      window.gameDoRender();
    });
    await expect(page).toHaveScreenshot('level1-player-dying.png');

    const endRunScreen = page.locator('#endRunScreen');
    await expect(endRunScreen).not.toBeVisible();

    // advance ~1 second for end run screen to trigger and become visible
    await page.clock.fastForward(1100);
    await expect(endRunScreen).toBeVisible();

    // verify player object in playersGroup is dead/removed
    const hasPlayerAfterDeath = await page.evaluate(() => {
      const scene = window.gameScene;
      const playersGroup = scene?.getObjectByName('playersGroup');
      return playersGroup?.children.some((child) => child.userData.type === 'player');
    });
    expect(hasPlayerAfterDeath).toBe(false);
  });
});

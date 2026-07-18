import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Main Screen', () => {
  test('should always look the same at the start', async ({ page }) => {
    await initializePage(page, { state: {} });

    await page.goto('./');
    await startGame(page);

    // verify we are on main screen
    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toContainClass('inactive');

    // force a Three.js render
    await page.evaluate(() => {
      window.gameDoRender();
    });

    // take snapshot of the screen
    await expect(page.locator('main')).toHaveScreenshot('game-start.png');
  });
});

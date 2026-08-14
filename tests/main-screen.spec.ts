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

  test('should not show out of energy message when starting a run with 1 energy', async ({
    page,
  }) => {
    const todayStr = new Date().toISOString().split('T')[0]!;
    await initializePage(page, {
      state: { level: 5, energy: 1, lastDailyGiftGiven: todayStr },
    });

    await page.goto('./');
    await startGame(page);

    const mainEl = page.locator('main');
    await expect(mainEl).not.toContainClass('no-energy');

    // click to start run
    await page.locator('#webglCanvas').click();

    // verify run section is active
    await expect(page.locator('#run')).not.toContainClass('inactive');

    // while run is started/active, main should not have no-energy class
    await expect(mainEl).not.toContainClass('no-energy');

    // energy value display in playStats should have updated to 0
    await expect(page.locator('#mainScreen .playStats .energy .value')).toHaveText('0');

    // quit the run
    await page.locator('#quitBtn').click();
    await page.clock.fastForward(1000);

    // click retry on end run screen to return to main screen
    await page.locator('#endRunScreen button.retry').click();

    // back on main screen with 0 energy, main should now have no-energy class
    await expect(page.locator('#mainScreen')).not.toContainClass('inactive');
    await expect(mainEl).toContainClass('no-energy');
  });
});

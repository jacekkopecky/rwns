import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Back To Basics Side Game', () => {
  test('should open, display correctly, and return to main screen', async ({ page }) => {
    await initializePage(page, {
      state: {
        level: 10,
        energy: 100,
      },
    });

    await page.goto('./');
    await startGame(page);

    // verify we are on main screen
    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toContainClass('inactive');

    // find and click the back to basics button
    const backToBasicsBtn = page.locator('#mainScreen .sectionButtons.right .backToBasics');
    await expect(backToBasicsBtn).toBeVisible();
    await backToBasicsBtn.click();

    // verify we transitioned to back to basics section
    const backToBasicsSection = page.locator('#backToBasics');
    await expect(backToBasicsSection).not.toContainClass('inactive');
    await expect(mainScreen).toContainClass('inactive');

    // check that play stats and touch to start message are correct
    const stats = page.locator('#backToBasics .playStats');
    await expect(stats).toContainText('Played 0');
    await expect(stats).not.toContainText('Level');

    const touchToStart = page.locator('#touchToStart');
    await expect(touchToStart).toContainText('touch to start');
    await expect(touchToStart).toBeVisible();

    // force a Three.js render
    await page.evaluate(() => {
      (window as unknown as { gameDoRender: () => void }).gameDoRender();
    });

    // take a screenshot of the whole page
    await expect(page).toHaveScreenshot('back-to-basics-main.png');

    // click close button to return to main screen
    const closeBtn = page.locator('#backToBasics button.close');
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();

    // verify we are back on main screen
    await expect(backToBasicsSection).toContainClass('inactive');
    await expect(mainScreen).not.toContainClass('inactive');
  });
});

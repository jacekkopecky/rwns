import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Main Screen Section Buttons', () => {
  test('should display left and right section buttons correctly', async ({ page }) => {
    await initializePage(page, {
      state: {
        level: 30,
        energy: 100,
      },
    });

    await page.goto('./');
    await startGame(page);

    // verify we are on main screen
    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toContainClass('inactive');

    // verify left and right section buttons are there
    const leftSectionButtons = page.locator('#mainScreen .left.sectionButtons');
    const rightSectionButtons = page.locator('#mainScreen .right.sectionButtons');

    await expect(leftSectionButtons).toBeVisible();
    await expect(rightSectionButtons).toBeVisible();

    // take screenshots of both section button containers for visual regression tests
    await expect(leftSectionButtons).toHaveScreenshot('left-section-buttons.png');
    await expect(rightSectionButtons).toHaveScreenshot('right-section-buttons.png');
  });
});

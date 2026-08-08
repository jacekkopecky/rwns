import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

const themeColorMainScreen = '#f3e9b9';
const themeColorCards = '#3f115f';
const themeColorSettings = '#3e6545';

test.describe('Generic sections behaviours', () => {
  test('should update theme-color meta tag according to the active game screen', async ({
    page,
  }) => {
    // level 100 so that both cards and settings buttons are available
    await initializePage(page, { state: { level: 100 } });
    await page.goto('./');

    const metaThemeColor = page.locator('head meta[name="theme-color"]');

    // on startup / splash screen, theme color is same as main screen
    await expect(metaThemeColor).toHaveAttribute('content', themeColorMainScreen);

    // start game -> moves to mainScreen
    await startGame(page);
    await expect(metaThemeColor).toHaveAttribute('content', themeColorMainScreen);

    // cards screen -> theme color should update to cards theme color
    const cardsBtn = page.locator('#mainScreen .sectionButtons .cards');
    await cardsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', themeColorCards);

    // close cards -> returns to mainScreen -> theme-color should return to mainScreen theme color
    const closeCardsBtn = page.locator('#cards button.close');
    await closeCardsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', themeColorMainScreen);

    // settings screen
    const settingsBtn = page.locator('#settingsBtn');
    await settingsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', themeColorSettings);
  });
});

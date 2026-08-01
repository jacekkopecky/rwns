import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Splash Screen & Fullscreen & Theme-color', () => {
  test('should toggle showingSplashScreen class on body when user leaves/enters fullscreen', async ({
    page,
  }) => {
    await initializePage(page);
    await page.goto('./');

    // Initially, start button is visible and body has class 'showingSplashScreen'
    const body = page.locator('body');
    await expect(body).toHaveClass(/showingSplashScreen/);

    // Clicking start should request fullscreen and hide splash screen
    await startGame(page);
    await expect(body).not.toHaveClass(/showingSplashScreen/);

    // Mock/simulate exiting fullscreen by dispatching fullscreenchange event with null fullscreenElement
    await page.evaluate(() => {
      Object.defineProperty(document, 'fullscreenElement', {
        value: null,
        writable: true,
        configurable: true,
      });
      const event = new Event('fullscreenchange');
      document.querySelector('main')?.dispatchEvent(event);
    });

    // Body should get showingSplashScreen class back when we leave fullscreen
    await expect(body).toHaveClass(/showingSplashScreen/);

    // The start button text should change to 'Start' (or 'Resume' if run was active)
    const startBtn = page.locator('#startBtn');
    await expect(startBtn).toHaveText('Start');
  });

  test('should go to splash screen when visibilityState changes to hidden', async ({ page }) => {
    await initializePage(page);
    await page.goto('./');
    await startGame(page);

    const body = page.locator('body');
    await expect(body).not.toHaveClass(/showingSplashScreen/);

    // Simulate page visibility changing to hidden
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', {
        value: 'hidden',
        writable: true,
        configurable: true,
      });
      document.dispatchEvent(new Event('visibilitychange'));
    });

    // Body should get showingSplashScreen class when hidden
    await expect(body).toHaveClass(/showingSplashScreen/);
  });

  test('should update theme-color meta tag according to the active game screen', async ({
    page,
  }) => {
    // We initialize with level 100 so that both cards and settings buttons are available
    await initializePage(page, { state: { level: 100 } });
    await page.goto('./');

    const metaThemeColor = page.locator('head meta[name="theme-color"]');

    // On startup / splash screen, theme color is set to exitBtn theme color (from main screen: #f3e9b9)
    // because updateIsOnSplashScreen(true) sets theme-color to el.exitBtn, which gets #f3e9b9
    await expect(metaThemeColor).toHaveAttribute('content', '#f3e9b9');

    // Start game -> moves to mainScreen. mainScreen uses the default --theme-color or inherited from body (#f3e9b9)
    await startGame(page);
    await expect(metaThemeColor).toHaveAttribute('content', '#f3e9b9');

    // Go to cards screen -> theme color should update to cards theme color (#3f115f)
    const cardsBtn = page.locator('#mainScreen .sectionButtons .cards');
    await cardsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', '#3f115f');

    // Close cards -> returns to mainScreen -> theme-color should return to mainScreen theme color (#f3e9b9)
    const closeCardsBtn = page.locator('#cards button.close');
    await closeCardsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', '#f3e9b9');

    // Go to settings screen (bg is #3e6545, theme-color should be same)
    const settingsBtn = page.locator('#settingsBtn');
    await settingsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', '#3e6545');
  });
});

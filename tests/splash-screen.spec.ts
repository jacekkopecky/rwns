import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Splash Screen', () => {
  test('should toggle showingSplashScreen class on body when user leaves/enters fullscreen', async ({
    page,
  }) => {
    await initializePage(page);
    await page.goto('./');

    // initially, start button is visible and body has class 'showingSplashScreen'
    const body = page.locator('body');
    await expect(body).toContainClass('showingSplashScreen');

    // clicking start should request fullscreen and hide splash screen
    await startGame(page);
    await expect(body).not.toContainClass('showingSplashScreen');

    // Mock/simulate exiting fullscreen by dispatching fullscreenchange event with null fullscreenElement
    await page.evaluate(() => {
      Object.defineProperty(document, 'fullscreenElement', {
        value: null,
        writable: true,
        configurable: true,
      });
      document.querySelector('main')?.dispatchEvent(new Event('fullscreenchange'));
    });

    // body should get showingSplashScreen class back because we left fullscreen
    await expect(body).toContainClass('showingSplashScreen');
  });

  test('should go to splash screen when visibilityState changes to hidden', async ({ page }) => {
    await initializePage(page);
    await page.goto('./');
    await startGame(page);

    const body = page.locator('body');
    await expect(body).not.toContainClass('showingSplashScreen');

    // simulate page visibility changing to hidden
    await page.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', {
        value: 'hidden',
        writable: true,
        configurable: true,
      });
      document.dispatchEvent(new Event('visibilitychange'));
    });

    // body should get showingSplashScreen class because the page is no longer visible
    await expect(body).toContainClass('showingSplashScreen');
  });
});

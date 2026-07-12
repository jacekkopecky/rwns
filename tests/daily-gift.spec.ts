import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Daily Gift Popup Trigger & Suppression', () => {
  // run tests serially to avoid concurrent WebGL context creation and CPU throttling
  test.describe.configure({ mode: 'serial' });

  test("should automatically display Daily Gift popup if lastDailyGiftGiven doesn't match today at level 10", async ({
    page,
  }) => {
    // install fake clock to a fixed date and pause it
    const fakeTime = new Date('2024-03-01T12:00:00Z');
    await page.clock.install({ time: fakeTime });
    await page.clock.pauseAt(fakeTime);

    // initialize page with level 10 and mismatched date
    await initializePage(page, {
      level: 10,
      lastDailyGiftGiven: '2024-02-28',
    });

    await page.goto('./');

    // advance clock by 150ms to fire the TESTING class setup and disable transitions/animations
    await page.clock.runFor(150);

    await startGame(page);

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass(/inactive/);

    // verify daily gift popup is not active initially (since 1000ms has not passed on the paused clock)
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toHaveClass(/inactive/);

    // fast forward clock by 2000ms
    await page.clock.runFor(2000);

    // verify daily gift popup is displayed
    await expect(dailyGift).not.toHaveClass(/inactive/);
  });

  test('should not display Daily Gift popup if lastDailyGiftGiven matches today at level 10', async ({
    page,
  }) => {
    // install fake clock to a fixed date and pause it
    const fakeTime = new Date('2024-03-01T12:00:00Z');
    await page.clock.install({ time: fakeTime });
    await page.clock.pauseAt(fakeTime);

    // initialize page with level 10 and matching date
    await initializePage(page, {
      level: 10,
      lastDailyGiftGiven: '2024-03-01',
    });

    await page.goto('./');

    // advance clock by 150ms to fire the TESTING class setup and disable transitions/animations
    await page.clock.runFor(150);

    await startGame(page);

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass(/inactive/);

    // verify daily gift popup is not active initially
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toHaveClass(/inactive/);

    // fast forward clock by 2000ms
    await page.clock.runFor(2000);

    // verify daily gift popup is still inactive
    await expect(dailyGift).toHaveClass(/inactive/);
  });

  test("should not display Daily Gift popup at level 4 even if lastDailyGiftGiven doesn't match today", async ({
    page,
  }) => {
    // install fake clock to a fixed date and pause it
    const fakeTime = new Date('2024-03-01T12:00:00Z');
    await page.clock.install({ time: fakeTime });
    await page.clock.pauseAt(fakeTime);

    // initialize page with level 4 and mismatched date
    await initializePage(page, {
      level: 4,
      lastDailyGiftGiven: '2024-02-28',
    });

    await page.goto('./');

    // advance clock by 150ms to fire the TESTING class setup and disable transitions/animations
    await page.clock.runFor(150);

    await startGame(page);

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass(/inactive/);

    // verify daily gift popup is not active initially
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toHaveClass(/inactive/);

    // fast forward clock by 2000ms
    await page.clock.runFor(2000);

    // verify daily gift popup is still inactive
    await expect(dailyGift).toHaveClass(/inactive/);
  });
});

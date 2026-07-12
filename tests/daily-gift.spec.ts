import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Daily Gift Popup Trigger & Suppression', () => {
  test("should automatically display Daily Gift if lastDailyGiftGiven doesn't match today", async ({
    page,
  }) => {
    // initialize page with level 10 so daily gift is available and mismatched date
    await initializePage(page, {
      state: {
        level: 10,
        lastDailyGiftGiven: '2026-01-28',
      },
      time: '2026-01-01T12:00:00Z',
    });

    await page.goto('./');
    await startGame(page);

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass('inactive');

    // verify daily gift popup is not active initially (since 1000ms has not passed on the paused clock)
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toHaveClass('inactive');

    // fast forward clock by 2000ms
    await page.clock.runFor(2000);

    // verify daily gift popup is displayed
    await expect(dailyGift).not.toHaveClass('inactive');
    // mainScreen doesn't have the inactive class because it's visible under the daily gift
  });

  test('should not display Daily Gift popup if lastDailyGiftGiven matches today at level 10', async ({
    page,
  }) => {
    // initialize page with level 10 and matching date
    await initializePage(page, {
      state: {
        level: 10,
        lastDailyGiftGiven: '2026-01-01',
      },
      time: '2026-01-01T12:00:00Z',
    });

    await page.goto('./');
    await startGame(page);

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass('inactive');

    // verify daily gift popup is not active initially
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toHaveClass('inactive');

    // fast forward clock by 2000ms
    await page.clock.runFor(2000);

    // verify daily gift popup is still inactive
    await expect(dailyGift).toHaveClass('inactive');
    await expect(mainScreen).not.toHaveClass('inactive');
  });

  test("should not display Daily Gift popup at level 4 even if lastDailyGiftGiven doesn't match today", async ({
    page,
  }) => {
    // initialize page with level 4 and mismatched date
    await initializePage(page, {
      state: {
        level: 4,
        lastDailyGiftGiven: '2026-01-28',
      },
      time: '2026-01-01T12:00:00Z',
    });

    await page.goto('./');
    await startGame(page);

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass('inactive');

    // verify daily gift popup is not active initially
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toHaveClass('inactive');

    // fast forward clock by 2000ms
    await page.clock.runFor(2000);

    // verify daily gift popup is still inactive
    await expect(dailyGift).toHaveClass('inactive');
    await expect(mainScreen).not.toHaveClass('inactive');
  });
});

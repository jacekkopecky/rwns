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
    const pauseTime = await page.evaluate(() => Date.now() + 100);
    await page.clock.pauseAt(pauseTime);
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
    const pauseTime = await page.evaluate(() => Date.now() + 100);
    await page.clock.pauseAt(pauseTime);
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
    const pauseTime = await page.evaluate(() => Date.now() + 100);
    await page.clock.pauseAt(pauseTime);
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

  test('should allow user to spin again if landing on spin-again prize', async ({ page }) => {
    // initialize page with level 10, mismatched date, and custom wallet/energy
    await initializePage(page, {
      state: {
        level: 10,
        lastDailyGiftGiven: '2026-01-28',
        energy: 10,
        wallet: { wallet: { coin: 100, gem: 0, card: 0 } },
      },
      time: '2026-01-01T12:00:00Z',
    });

    await page.goto('./');
    const pauseTime = await page.evaluate(() => Date.now() + 100);
    await page.clock.pauseAt(pauseTime);
    await startGame(page);

    // fast forward clock by 2000ms to trigger the daily gift popup
    await page.clock.runFor(2000);

    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).not.toHaveClass('inactive');

    // mock pickWeightedItem to select the first item (gift 0), which is 'spin-again'
    await page.evaluate(() => {
      (window as any).mockPickWeightedItem = (items: any[]) => {
        return items[0].value;
      };
    });

    // click the daily gift section to start spinning
    await dailyGift.click();

    // click again quickly to stop spinning
    await dailyGift.click();

    // verify the state hasn't changed from how it was before the spin
    let lastDailyGiftGiven = await page.evaluate(() => window.gameState.lastDailyGiftGiven);
    let coin = await page.evaluate(() => window.gameState.wallet.read('coin'));
    let energy = await page.evaluate(() => window.gameState.energy);

    expect(lastDailyGiftGiven).toBe('2026-01-28');
    expect(coin).toBe(100);
    expect(energy).toBe(10);

    // subsequent spin: delete the mock to let the subsequent spin run with the original game logic
    await page.evaluate(() => {
      delete (window as any).mockPickWeightedItem;
    });

    // click to start spinning again
    await dailyGift.click();

    // click again quickly to stop spinning
    await dailyGift.click();

    // verify subsequent spin changed the date and content of wallet or energy
    lastDailyGiftGiven = await page.evaluate(() => window.gameState.lastDailyGiftGiven);
    coin = await page.evaluate(() => window.gameState.wallet.read('coin'));
    energy = await page.evaluate(() => window.gameState.energy);

    expect(lastDailyGiftGiven).toBe('2026-01-01');
    const coinChanged = coin !== 100;
    const energyChanged = energy !== 10;
    expect(coinChanged || energyChanged).toBe(true);
  });
});

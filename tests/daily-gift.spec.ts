import { expect, test } from '@playwright/test';

import { clickScreen, initializePage, startGame } from './lib';

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
    await expect(mainScreen).not.toContainClass('inactive');

    // verify daily gift popup is not active initially (since 1000ms has not passed on the paused clock)
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toContainClass('inactive');

    // fast forward trigger the daily gift popup
    await page.clock.fastForward(2000);

    // verify daily gift popup is displayed
    await expect(dailyGift).not.toContainClass('inactive');
    // mainScreen doesn't have the inactive class because it's visible under the daily gift

    await expect(page).toHaveScreenshot('gift-page.png');
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
    await expect(mainScreen).not.toContainClass('inactive');

    // verify daily gift popup is not active initially
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toContainClass('inactive');

    // fast forward trigger the daily gift popup
    await page.clock.fastForward(2000);

    // verify daily gift popup is still inactive
    await expect(dailyGift).toContainClass('inactive');
    await expect(mainScreen).not.toContainClass('inactive');
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
    await expect(mainScreen).not.toContainClass('inactive');

    // verify daily gift popup is not active initially
    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).toContainClass('inactive');

    // fast forward trigger the daily gift popup
    await page.clock.fastForward(2000);

    // verify daily gift popup is still inactive
    await expect(dailyGift).toContainClass('inactive');
    await expect(mainScreen).not.toContainClass('inactive');
  });
});

test.describe('Daily Gift Spinner Spinning & Award Resolution', () => {
  const subScenarios = [
    { type: 'coin', pickRandom: 0.1 },
    { type: 'gem', pickRandom: 0.3 },
    { type: 'energy', pickRandom: 0.2 },
  ];

  for (const scenario of subScenarios) {
    test(`should correctly grant and display ${scenario.type} award`, async ({ page }) => {
      await initializePage(page, {
        state: {
          level: 25, // need level 25 to get gems
          lastDailyGiftGiven: '2026-01-28',
          energy: 5,
          wallet: { wallet: { coin: 100, gem: 3 } },
        },
        time: '2026-01-01T12:00:00Z',
      });

      await page.addInitScript((r) => {
        Math.random = () => r;
      }, scenario.pickRandom);

      await page.goto('./');
      await startGame(page);

      const dailyGift = page.locator('#dailyGift');
      // fast forward trigger the daily gift popup
      await page.clock.fastForward(2000);
      await expect(dailyGift).not.toContainClass('inactive');

      const spinner = dailyGift.locator('.spinner');
      await expect(spinner).not.toContainClass('spinning');

      // first click starts the spin
      await clickScreen(page, 0.5, 0.5);
      await expect(spinner).toContainClass('spinning');

      // fast forward 10s to complete spin
      await page.clock.fastForward(10000);
      await expect(spinner).not.toContainClass('spinning');

      // click again to close the daily gift screen
      await clickScreen(page, 0.5, 0.5);
      await expect(dailyGift).toContainClass('inactive');

      // fast forward to let the wallet animation complete
      await page.clock.fastForward(2000);

      const mainScreen = page.locator('#mainScreen');
      await expect(mainScreen).not.toContainClass('inactive');

      // verify the value updates correctly
      if (scenario.type === 'coin') {
        const coinValueEl = page.locator('#mainWallet .wallet .coin .value');
        const stateCoin = await page.evaluate(() => window.gameState.wallet.read('coin'));
        expect(stateCoin).toBe(140);
        await expect(coinValueEl).toHaveText(String(stateCoin));
      } else if (scenario.type === 'gem') {
        const gemValueEl = page.locator('#mainWallet .wallet .gem .value');
        const stateGem = await page.evaluate(() => window.gameState.wallet.read('gem'));
        expect(stateGem).toBe(7);
        await expect(gemValueEl).toHaveText(String(stateGem));
      } else if (scenario.type === 'energy') {
        const energyValueEl = page.locator('#playStats .energy .value');
        const stateEnergy = await page.evaluate(() => window.gameState.energy);
        expect(stateEnergy).toBe(8);
        await expect(energyValueEl).toHaveText(String(stateEnergy));
      }
    });
  }

  test('should stop spinning on second click and exit on third click', async ({ page }) => {
    // initialize page with level 10 and mismatched date
    await initializePage(page, {
      state: {
        level: 10,
        wallet: { wallet: { coin: 100 } },
        lastDailyGiftGiven: '2026-01-28',
      },
      time: '2026-01-01T12:00:00Z',
    });

    // pick the last award, definitely not spin-again
    await page.addInitScript(() => {
      Math.random = () => 1;
    });

    await page.goto('./');
    await startGame(page);

    const dailyGift = page.locator('#dailyGift');
    // fast forward trigger the daily gift popup
    await page.clock.fastForward(2000);
    await expect(dailyGift).not.toContainClass('inactive');

    const spinner = dailyGift.locator('.spinner');
    await expect(spinner).not.toContainClass('spinning');

    // first click starts the spin
    await clickScreen(page, 0.5, 0.5);
    await expect(spinner).toContainClass('spinning');
    await expect(dailyGift).not.toContainClass('inactive');

    // second click immediately stops the spinning but still shows the spinner
    await clickScreen(page, 0.5, 0.5);
    await expect(spinner).not.toContainClass('spinning');
    await expect(dailyGift).not.toContainClass('inactive');

    // third click takes the user back to the main screen
    await clickScreen(page, 0.5, 0.5);
    await expect(dailyGift).toContainClass('inactive');

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).toContainClass('_active');
  });

  test('should allow user to spin again if landing on spin-again prize', async ({ page }) => {
    await initializePage(page, {
      state: {
        level: 10,
        lastDailyGiftGiven: '2026-01-28',
        wallet: { wallet: { coin: 100 } },
      },
      time: '2026-01-01T12:00:00Z',
    });

    await page.goto('./');
    await startGame(page);

    const initialState = await page.evaluate(() => window.gameState);

    // fast forward trigger the daily gift popup
    await page.clock.fastForward(2000);

    const dailyGift = page.locator('#dailyGift');
    await expect(dailyGift).not.toHaveClass('inactive');

    // mock random to select the first item (gift 0), which is 'spin-again' at first, then coins
    await page.evaluate(() => {
      Math.random = () => 0;
    });

    // click the daily gift section to start spinning
    await clickScreen(page, 0.5, 0.5);

    // fast forward 10s to complete spin
    await page.clock.fastForward(10000);

    // verify the state hasn't changed from how it was before the spin
    const state = await page.evaluate(() => window.gameState);
    expect(state).toEqual(initialState);
    expect(state).not.toBe(initialState);
    expect(state.lastDailyGiftGiven).toBe('2026-01-28');

    // click to start spinning again, then fwd to end of spinning
    await clickScreen(page, 0.5, 0.5);
    await page.clock.fastForward(10000);

    const endState = await page.evaluate(() => window.gameState);
    expect(endState).not.toEqual(initialState);
    expect(endState.lastDailyGiftGiven).toBe('2026-01-01');

    const coin = await page.evaluate(() => window.gameState.wallet.read('coin'));
    // we picked coins so we should have it
    expect(coin).not.toBe(100);
  });
});

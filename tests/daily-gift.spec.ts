import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Daily Gift Popup Trigger & Suppression', () => {
  test.setTimeout(120000);

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
    await page.clock.runFor(150);
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
    await page.clock.runFor(150);
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
    await page.clock.runFor(150);
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

test.describe('Daily Gift Spinner Spinning & Award Resolution', () => {
  test.setTimeout(120000);

  const subScenarios = [
    { type: 'coin', label: 'money', initialWallet: { coin: 0, gem: 0 }, initialEnergy: 10 },
    { type: 'energy', label: 'energy', initialWallet: { coin: 100, gem: 0 }, initialEnergy: 2 },
    { type: 'gem', label: 'gem', initialWallet: { coin: 100, gem: 5 }, initialEnergy: 10 },
  ];

  for (const scenario of subScenarios) {
    test(`should correctly grant and display ${scenario.label} award`, async ({ page }) => {
      // initialize page with level 10 and mismatched date
      await initializePage(page, {
        state: {
          level: 10,
          lastDailyGiftGiven: '2026-01-28',
          energy: scenario.initialEnergy,
          wallet: { wallet: scenario.initialWallet },
        },
        time: '2026-01-01T12:00:00Z',
      });

      // inject the mocks
      await page.addInitScript((type) => {
        (window as any).giftToSelect = type;
        (window as any).mockPickWeightedItem = (items: any[]) => {
          const giftType = (window as any).giftToSelect;
          const found = items.find((item) => item.value.award === giftType);
          if (found) return found.value;
          return { award: giftType, amount: 4, factor: 10 };
        };
        (window as any).mockAnimateValue = () => {
          // do nothing
        };
      }, scenario.type);

      await page.goto('./');
      await page.clock.runFor(150);
      await startGame(page);

      const dailyGift = page.locator('#dailyGift');
      await page.clock.runFor(2000);
      await expect(dailyGift).not.toHaveClass('inactive');

      const spinner = dailyGift.locator('.spinner');
      await expect(spinner).not.toHaveClass(/spinning/);

      // first click starts the spin
      await dailyGift.click();
      await expect(spinner).toHaveClass(/spinning/);

      // disable the slow 3D rendering loop during the fast-forward to avoid CPU timeouts
      await page.evaluate(() => {
        window.requestAnimationFrame = () => 0;
      });

      // fast forward 5000ms to complete spin
      await page.clock.runFor(5000);
      await expect(spinner).not.toHaveClass(/spinning/);

      // click again to close the daily gift screen
      await dailyGift.click();
      await expect(dailyGift).toHaveClass('inactive');

      const mainScreen = page.locator('#mainScreen');
      await expect(mainScreen).not.toHaveClass('inactive');

      // verify wallet/top-bar updates correctly
      if (scenario.type === 'coin') {
        const coinValueEl = page.locator('#mainScreen .topBar .wallet .coin .value');
        const stateCoin = await page.evaluate(() => window.gameState.wallet.read('coin'));
        expect(stateCoin).toBeGreaterThan(0);
        await expect(coinValueEl).toHaveText(String(stateCoin));
      } else if (scenario.type === 'energy') {
        const energyValueEl = page.locator('#playStats .energy .value');
        const stateEnergy = await page.evaluate(() => window.gameState.energy);
        expect(stateEnergy).toBeGreaterThan(scenario.initialEnergy);
        await expect(energyValueEl).toHaveText(String(stateEnergy));
      } else if (scenario.type === 'gem') {
        const gemValueEl = page.locator('#mainScreen .topBar .wallet .gem .value');
        const stateGem = await page.evaluate(() => window.gameState.wallet.read('gem'));
        expect(stateGem).toBeGreaterThan(scenario.initialWallet.gem);
        await expect(gemValueEl).toHaveText(String(stateGem));
      }
    });
  }

  test('should stop spinning on second click and exit on third click', async ({ page }) => {
    // initialize page with level 10 and mismatched date
    await initializePage(page, {
      state: {
        level: 10,
        lastDailyGiftGiven: '2026-01-28',
      },
      time: '2026-01-01T12:00:00Z',
    });

    // inject mocks
    await page.addInitScript(() => {
      (window as any).giftToSelect = 'coin';
      (window as any).mockPickWeightedItem = (items: any[]) => {
        const found = items.find((item) => item.value.award === 'coin');
        return found ? found.value : items[0].value;
      };
      (window as any).mockAnimateValue = () => {
        // do nothing
      };
    });

    await page.goto('./');
    await page.clock.runFor(150);
    await startGame(page);

    const dailyGift = page.locator('#dailyGift');
    await page.clock.runFor(2000);
    await expect(dailyGift).not.toHaveClass('inactive');

    const spinner = dailyGift.locator('.spinner');
    await expect(spinner).not.toHaveClass(/spinning/);

    // first click starts the spin
    await dailyGift.click();
    await expect(spinner).toHaveClass(/spinning/);

    // second click immediately stops the spinning but still shows the spinner
    await dailyGift.click();
    await expect(spinner).not.toHaveClass(/spinning/);
    await expect(dailyGift).not.toHaveClass('inactive');

    // third click takes the user back to the main screen
    await dailyGift.click();
    await expect(dailyGift).toHaveClass('inactive');

    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass('inactive');
  });
});

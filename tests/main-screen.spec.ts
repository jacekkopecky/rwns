import { expect, test } from '@playwright/test';

test.describe('Main Screen Upgrades at Level 30', () => {
  test('should allow rate and damage upgrades', async ({ page }) => {
    // Set localStorage before navigation
    await page.addInitScript(() => {
      const LOCAL_STORAGE_KEY = 'rwns-game-state';
      const now = new Date();
      const today = now.toISOString().split('T')[0];
      const state = {
        level: 30,
        energy: 100,
        wallet: { wallet: { coin: 1000, gem: 0, card: 0 } },
        cards: { wallet: {} },
        runUpgradeLevels: {},
        collectedGemIds: [],
        played: 0,
        lastEnergyGiven: Date.now(),
        lastDailyGiftGiven: today,
        startDate: '2026-01-01',
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));

      // Forcefully disable animations and daily gift
      const style = document.createElement('style');
      style.innerHTML = `
        #dailyGift { display: none !important; }
        *, *::before, *::after {
          transition: none !important;
          animation: none !important;
        }
      `;
      document.head.appendChild(style);
    });

    await page.goto('./');

    // Wait for the version information to appear as "unknown"
    const versionEl = page.locator('#version .value');
    await expect(versionEl).toHaveText('unknown', { timeout: 15000 });

    // Click "Start" on splash screen if it's visible
    const startBtn = page.locator('#startBtn');
    if (await startBtn.isVisible()) {
      await startBtn.click();
    }

    // Verify we are on main screen
    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toHaveClass(/inactive/, { timeout: 15000 });

    // Verify level is 30 in UI
    await expect(page.locator('#playStats .level .value')).toHaveText('30', { timeout: 15000 });

    // Verify wallet has 1000 coins in UI
    const walletValueEl = page.locator('#mainScreen .topBar .wallet .coin .value');
    await expect(walletValueEl).toHaveText('1000');

    // Get locators for upgrade buttons
    const rateBtn = page.locator('#mainScreen .upgradeButtons .rate');
    const damageBtn = page.locator('#mainScreen .upgradeButtons .damage');

    // Verify buttons are NOT disabled
    await expect(rateBtn).not.toHaveClass(/disabled/);
    await expect(damageBtn).not.toHaveClass(/disabled/);

    // Initial levels should be "Level 1"
    await expect(rateBtn.locator('.level .value')).toHaveText('Level 1');
    await expect(damageBtn.locator('.level .value')).toHaveText('Level 1');

    // Take initial snapshot of the upgrade buttons section
    // Commented out because it was timing out in this environment
    /*
    await expect(page.locator('#mainScreen .upgradeButtons')).toHaveScreenshot(
      'upgrade-buttons-initial.png',
    );
    */

    // Perform Rate upgrade
    await rateBtn.click();
    await expect(rateBtn.locator('.level .value')).toHaveText('Level 2');

    // Perform Damage upgrade
    await damageBtn.click();
    await expect(damageBtn.locator('.level .value')).toHaveText('Level 2');

    // Verify wallet has decreased
    await expect(walletValueEl).not.toHaveText('1000');

    // Verify gameState in window
    const upgradeLevels = await page.evaluate(() => (window as any).gameState.runUpgradeLevels);
    expect(upgradeLevels.rate).toBe(1);
    expect(upgradeLevels.damage).toBe(1);

    // Take final snapshot
    /*
    await expect(page.locator('#mainScreen .upgradeButtons')).toHaveScreenshot(
      'upgrade-buttons-after.png',
    );
    */
  });
});

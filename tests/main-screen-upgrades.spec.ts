import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Main Screen Upgrades', () => {
  test('should allow player, rate and damage upgrades at level 20', async ({ page }) => {
    await initializePage(page, {
      state: {
        level: 20, // only upgrade buttons are visible
        energy: 100,
        wallet: { wallet: { coin: 1000 } },
      },
    });

    await page.goto('./');
    await startGame(page);

    // verify we are on main screen
    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toContainClass('inactive');

    // verify level is 20 in UI
    await expect(page.locator('#mainScreen .playStats .level .value')).toHaveText('20');

    // verify wallet has 1000 coins in UI
    const walletValueEl = page.locator('#mainWallet .wallet .coin .value');
    await expect(walletValueEl).toHaveText('1000');

    // get locators for upgrade buttons
    const rateBtn = page.locator('#mainScreen .upgradeButtons .rate');
    const damageBtn = page.locator('#mainScreen .upgradeButtons .damage');
    const playersBtn = page.locator('#mainScreen .upgradeButtons .players');

    // verify buttons are NOT disabled
    await expect(rateBtn).not.toContainClass('disabled');
    await expect(damageBtn).not.toContainClass('disabled');
    await expect(playersBtn).not.toContainClass('disabled');

    // initial levels should be "Level 1"
    await expect(rateBtn.locator('.level .value')).toHaveText('Level 1');
    await expect(damageBtn.locator('.level .value')).toHaveText('Level 1');
    await expect(playersBtn.locator('.level .value')).toHaveText('Level 1');

    // take initial snapshot of the upgrade buttons section
    await expect(page.locator('#mainScreen .upgradeButtons')).toHaveScreenshot(
      'upgrade-buttons-1.png',
    );

    let upgradeLevels = await page.evaluate(() => window.gameState.runUpgradeLevels);
    expect(upgradeLevels.rate).not.toBe(1);
    expect(upgradeLevels.damage).not.toBe(1);
    expect(upgradeLevels.players).not.toBe(1);

    // perform rate upgrade
    await rateBtn.click();
    await expect(rateBtn.locator('.level .value')).toHaveText('Level 2');
    await expect(damageBtn.locator('.level .value')).toHaveText('Level 1');
    await expect(playersBtn.locator('.level .value')).toHaveText('Level 1');

    // perform damage upgrade
    await damageBtn.click();
    await expect(rateBtn.locator('.level .value')).toHaveText('Level 2');
    await expect(damageBtn.locator('.level .value')).toHaveText('Level 2');
    await expect(playersBtn.locator('.level .value')).toHaveText('Level 1');

    // perform player upgrade
    await playersBtn.click();
    await expect(rateBtn.locator('.level .value')).toHaveText('Level 2');
    await expect(damageBtn.locator('.level .value')).toHaveText('Level 2');
    await expect(playersBtn.locator('.level .value')).toHaveText('Level 2');

    // verify wallet has decreased
    await expect(walletValueEl).not.toHaveText('1000');

    // verify gameState in window
    upgradeLevels = await page.evaluate(() => window.gameState.runUpgradeLevels);
    expect(upgradeLevels.rate).toBe(1);
    expect(upgradeLevels.damage).toBe(1);
    expect(upgradeLevels.players).toBe(1);

    // take final snapshot
    await expect(page.locator('#mainScreen .upgradeButtons')).toHaveScreenshot(
      'upgrade-buttons-2.png',
    );
  });
});

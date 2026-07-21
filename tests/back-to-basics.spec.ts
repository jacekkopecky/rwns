import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Back To Basics Side Game', () => {
  test('should open, display correctly, and return to main screen', async ({ page }) => {
    await initializePage(page, {
      state: {
        level: 10,
        energy: 100,
      },
    });

    await page.addInitScript(() => {
      Math.random = () => 0.7; // make sure marvin moves its legs predictably
    });

    await page.goto('./');
    await startGame(page);

    const startPlayed = await page.evaluate(() => window.gameState.sideGames.backToBasics.played);
    const startLevel = await page.evaluate(() => window.gameState.sideGames.backToBasics.level);

    // verify we are on main screen
    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toContainClass('inactive');

    // find and click the back to basics button
    const backToBasicsBtn = page.locator('#mainScreen .sectionButtons.right .backToBasics');
    await expect(backToBasicsBtn).toBeVisible();
    await backToBasicsBtn.click();

    // jump ahead into the fade transition, screenshot it
    await page.clock.fastForward(1000);
    await expect(page).toHaveScreenshot('fade-in.png');

    // jump ahead into the fade transition
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);

    // verify we transitioned to back to basics section
    const backToBasicsSection = page.locator('#backToBasics');
    await expect(backToBasicsSection).not.toContainClass('inactive');
    await expect(mainScreen).toContainClass('inactive');

    // check that play stats and touch to start message are correct
    const stats = page.locator('#backToBasics .playStats');
    await expect(stats).toContainText('Played 0');
    await expect(stats).not.toContainText('Level');

    const touchToStart = page.locator('#touchToStart');
    await expect(touchToStart).toContainText('touch to start');
    await expect(touchToStart).toBeVisible();

    // force a Three.js render
    await page.evaluate(() => {
      window.gameDoRender();
    });

    // take a screenshot of the whole page
    await expect(page).toHaveScreenshot('back-to-basics-main.png');

    // start a run and finish it right away
    await page.locator('canvas').click();
    const quitBtn = page.locator('#quitBtn');
    await expect(quitBtn).toBeVisible();
    await quitBtn.click();
    await page.clock.fastForward(100);

    // check end run screen
    const endRun = page.locator('#endRunScreen');
    await expect(endRun).toHaveText(/Better luck next time!/);
    await expect(endRun).toBeVisible();

    // check the retry/progress buttons
    const retryBtn = endRun.locator('button.retry');
    await expect(retryBtn).toBeVisible();
    await expect(retryBtn).toHaveText('OK');
    await expect(endRun.locator('button.progress')).not.toBeVisible();

    // get back to backToBasics screen
    await expect(backToBasicsSection).toContainClass('inactive');
    await retryBtn.click();

    // check we're back on the backToBasics screen
    await expect(stats).toBeVisible();
    await expect(stats).not.toContainText('Played 0');
    await expect(stats).toContainText('Played 1');

    // click close button to return to main screen
    const closeBtn = page.locator('#backToBasics .closeBtn');
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();

    // jump ahead into the fade transition, screenshot it
    await page.clock.fastForward(1000);
    await expect(page).toHaveScreenshot('fade-out.png');

    // jump ahead into the fade transition
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);

    // verify we are back on main screen
    await expect(backToBasicsSection).toContainClass('inactive');
    await expect(mainScreen).not.toContainClass('inactive');

    // check that state has been updated with the run but not success
    const nowPlayed = await page.evaluate(() => window.gameState.sideGames.backToBasics.played);
    const nowLevel = await page.evaluate(() => window.gameState.sideGames.backToBasics.level);

    expect(nowPlayed).toBe(startPlayed + 1);
    expect(nowLevel).toBe(startLevel);
  });

  test('should finish the basics run successfully', async ({ page }) => {
    await initializePage(page, {
      state: {
        level: 10,
        energy: 100,
      },
    });

    await page.addInitScript(() => {
      Math.random = () => 0.7; // make sure marvin moves its legs predictably
    });

    await page.goto('./');
    await startGame(page);

    const startPlayed = await page.evaluate(() => window.gameState.sideGames.backToBasics.played);
    const startLevel = await page.evaluate(() => window.gameState.sideGames.backToBasics.level);

    // verify we are on main screen
    const mainScreen = page.locator('#mainScreen');
    await expect(mainScreen).not.toContainClass('inactive');

    // find and click the back to basics button
    const backToBasicsBtn = page.locator('#mainScreen .sectionButtons.right .backToBasics');
    await expect(backToBasicsBtn).toBeVisible();
    await backToBasicsBtn.click();

    // jump through the fade transition
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);

    // verify we transitioned to back to basics section
    const backToBasicsSection = page.locator('#backToBasics');
    await expect(backToBasicsSection).not.toContainClass('inactive');
    await expect(mainScreen).toContainClass('inactive');

    // start a run
    await page.locator('canvas').click();

    // get right into the final gate
    await page.clock.fastForward(62500);
    await page.evaluate(() => {
      window.gameDoRender();
    });
    await expect(page).toHaveScreenshot('end-gate.png');

    // wait for the end screen
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);

    const quitBtn = page.locator('#quitBtn');
    await expect(quitBtn).toBeDisabled();

    // check end run screen
    const endRun = page.locator('#endRunScreen');
    await expect(endRun).toHaveText(/Well done!/);
    await expect(endRun).toBeVisible();

    // check the retry/progress buttons
    const progressBtn = endRun.locator('button.progress');
    await expect(progressBtn).toBeVisible();
    await expect(progressBtn).toHaveText('OK');
    await expect(endRun.locator('button.retry')).not.toBeVisible();

    // get back to main screen
    await expect(backToBasicsSection).toContainClass('inactive');
    await expect(mainScreen).toContainClass('inactive');
    await progressBtn.click();

    // jump through the fade transition
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);
    await page.clock.fastForward(1000);

    // verify we are back on main screen
    await expect(backToBasicsSection).toContainClass('inactive');
    await expect(mainScreen).not.toContainClass('inactive');

    // check that state has been updated with the success
    const nowPlayed = await page.evaluate(() => window.gameState.sideGames.backToBasics.played);
    const nowLevel = await page.evaluate(() => window.gameState.sideGames.backToBasics.level);

    expect(nowPlayed).toBe(startPlayed + 1);
    expect(nowLevel).toBe(startLevel + 1);
  });
});

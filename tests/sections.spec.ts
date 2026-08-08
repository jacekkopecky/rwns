import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

const themeColorMainScreen = '#f3e9b9';
const themeColorCards = '#3f115f';
const themeColorSettings = '#3e6545';

test.describe('Generic sections behaviours', () => {
  test('should update theme-color meta tag according to the active game screen', async ({
    page,
  }) => {
    // level 100 so that both cards and settings buttons are available
    await initializePage(page, { state: { level: 100 } });
    await page.goto('./');

    const metaThemeColor = page.locator('head meta[name="theme-color"]');

    // on startup / splash screen, theme color is same as main screen
    await expect(metaThemeColor).toHaveAttribute('content', themeColorMainScreen);

    // start game -> moves to mainScreen
    await startGame(page);
    await expect(metaThemeColor).toHaveAttribute('content', themeColorMainScreen);

    // cards screen -> theme color should update to cards theme color
    const cardsBtn = page.locator('#mainScreen .sectionButtons .cards');
    await cardsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', themeColorCards);

    // close cards -> returns to mainScreen -> theme-color should return to mainScreen theme color
    const closeCardsBtn = page.locator('#cards button.close');
    await closeCardsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', themeColorMainScreen);

    // settings screen
    const settingsBtn = page.locator('#settingsBtn');
    await settingsBtn.click();
    await expect(metaThemeColor).toHaveAttribute('content', themeColorSettings);
  });

  test('should copy state JSON to clipboard on copy button click', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    await initializePage(page, { state: { level: 100 } });
    await page.goto('./');
    await startGame(page);

    // open settings screen
    const settingsBtn = page.locator('#settingsBtn');
    await settingsBtn.click();

    // open state details element
    const stateDetails = page.locator('#settings details.state');
    await stateDetails.click();

    // locate copy button
    const copyBtn = page.locator('#settings .copyBtn');
    await expect(copyBtn).toBeVisible();
    await expect(copyBtn).toHaveText('C');

    // click copy button
    await copyBtn.click();

    // should get the 'copied' class immediately
    await expect(copyBtn).toHaveClass(/copied/);

    // verify clipboard content is a valid JSON of the state
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
    const parsedState = JSON.parse(clipboardText);
    expect(parsedState.level).toBe(100);

    // wait for 1 second and check that 'copied' class is removed
    await page.clock.runFor(1000);
    await expect(copyBtn).not.toHaveClass(/copied/);
  });

  test('should hide share button if navigator.share is not supported', async ({ page }) => {
    await page.addInitScript(() => {
      // @ts-ignore
      delete navigator.share;
    });

    await initializePage(page, { state: { level: 100 } });
    await page.goto('./');
    await startGame(page);

    // open settings screen
    const settingsBtn = page.locator('#settingsBtn');
    await settingsBtn.click();

    // open state details element
    const stateDetails = page.locator('#settings details.state');
    await stateDetails.click();

    // share button should be hidden/gone
    const shareBtn = page.locator('#settings .shareBtn');
    await expect(shareBtn).toHaveClass(/hidden/);
    await expect(shareBtn).toHaveClass(/hiddenGone/);
  });

  test('should share state file when file sharing is supported', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).sharedData = null;
      navigator.share = async (data) => {
        (window as any).sharedData = data;
      };
      // @ts-ignore
      navigator.canShare = (data) => {
        return !!(data && data.files);
      };
    });

    await initializePage(page, { state: { level: 100 } });
    await page.goto('./');
    await startGame(page);

    // open settings screen
    const settingsBtn = page.locator('#settingsBtn');
    await settingsBtn.click();

    // open state details element
    const stateDetails = page.locator('#settings details.state');
    await stateDetails.click();

    // locate share button and click
    const shareBtn = page.locator('#settings .shareBtn');
    await expect(shareBtn).toBeVisible();
    await shareBtn.click();

    // verify that share was called with a file
    const sharedData = await page.evaluate(() => {
      const data = (window as any).sharedData;
      if (!data || !data.files || data.files.length === 0) {
        return null;
      }
      const file = data.files[0];
      return {
        title: data.title,
        fileName: file.name,
        fileType: file.type,
      };
    });

    expect(sharedData).not.toBeNull();
    expect(sharedData!.title).toBe('rwns-state.json');
    expect(sharedData!.fileName).toBe('rwns-state.json');
    expect(sharedData!.fileType).toBe('application/json');
  });

  test('should fallback to sharing text when file sharing is not supported', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).sharedData = null;
      navigator.share = async (data) => {
        (window as any).sharedData = data;
      };
      // @ts-ignore
      navigator.canShare = () => false;
    });

    await initializePage(page, { state: { level: 100 } });
    await page.goto('./');
    await startGame(page);

    // open settings screen
    const settingsBtn = page.locator('#settingsBtn');
    await settingsBtn.click();

    // open state details element
    const stateDetails = page.locator('#settings details.state');
    await stateDetails.click();

    // locate share button and click
    const shareBtn = page.locator('#settings .shareBtn');
    await expect(shareBtn).toBeVisible();
    await shareBtn.click();

    // verify that share was called with text instead of files
    const sharedData = await page.evaluate(() => {
      const data = (window as any).sharedData;
      if (!data) {
        return null;
      }
      return {
        title: data.title,
        text: data.text,
        hasFiles: !!data.files,
      };
    });

    expect(sharedData).not.toBeNull();
    expect(sharedData!.title).toBe('rwns-state.json');
    expect(sharedData!.hasFiles).toBe(false);
    const parsedState = JSON.parse(sharedData!.text);
    expect(parsedState.level).toBe(100);
  });
});

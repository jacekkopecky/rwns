import { expect, test } from '@playwright/test';

import type { SerializedState } from '#types';

import { initializePage, startGame } from './lib';

test.describe('Settings screen', () => {
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

    // click copy button
    await copyBtn.click();

    // should get the 'copied' class immediately
    await expect(copyBtn).toContainClass('copied');

    // verify clipboard content is a valid JSON of the state
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
    const parsedState = JSON.parse(clipboardText) as SerializedState;
    expect(parsedState.level).toBe(100);

    // wait for 1 second and check that 'copied' class is removed
    await page.clock.runFor(1000);
    await expect(copyBtn).not.toContainClass('copied');
  });

  test('should hide share button if navigator.share is not supported', async ({ page }) => {
    await page.addInitScript(() => {
      // @ts-expect-error navigator has share as non-optional but we want to delete it anyway
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
    await expect(shareBtn).not.toBeVisible();
  });

  test('should share state file when file sharing is supported', async ({ page }) => {
    await page.addInitScript(() => {
      window._testData = null;
      navigator.share = (data) => {
        window._testData = data;
        return Promise.resolve();
      };
      navigator.canShare = () => true;
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
      const data = window._testData as ShareData | null;
      if (!data?.files || data.files.length === 0) {
        return null;
      }
      const file = data.files[0];
      return {
        title: data.title,
        fileName: file?.name,
        fileType: file?.type,
      };
    });

    expect(sharedData).not.toBeNull();
    expect(sharedData!.title).toBe('rwns-state.txt');
    expect(sharedData!.fileName).toBe('rwns-state.txt');
    expect(sharedData!.fileType).toBe('text/plain');
  });

  test('should fallback to sharing text when file sharing is not supported', async ({ page }) => {
    await page.addInitScript(() => {
      delete window._testData;
      navigator.share = (data) => {
        window._testData = data;
        return Promise.resolve();
      };
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
      const data = window._testData as ShareData | null;
      return (
        data && {
          title: data.title,
          text: data.text,
          hasFiles: !!data.files,
        }
      );
    });

    expect(sharedData).not.toBeNull();
    expect(sharedData!.title).toBe('rwns-state.txt');
    expect(sharedData!.hasFiles).toBe(false);
    const parsedState = JSON.parse(sharedData!.text!) as unknown as SerializedState;
    expect(parsedState.level).toBe(100);
  });
});

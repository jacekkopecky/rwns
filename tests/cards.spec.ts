import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Cards Section & Purchases', () => {
  test('when buying a card, should highlight the cards and not show level when not leveling up', async ({
    page,
  }) => {
    // initialize with high gems and high level to allow cards,
    // and with one card already owned
    await initializePage(page, {
      state: {
        level: 300,
        wallet: {
          wallet: { gem: 10000, coin: 0, card: 0 },
        },
        cards: {
          wallet: { range1: 1 },
        },
      },
    });

    await page.goto('./');
    await startGame(page);

    // go to cards section
    const cardsBtn = page.locator('#mainScreen .sectionButtons .cards');
    await expect(cardsBtn).toBeVisible();
    await cardsBtn.click();

    // verify cards section is visible
    const cardsSection = page.locator('#cards');
    await expect(cardsSection).not.toContainClass('inactive');

    // check that range1 is currently visible inside the grid
    const gridCardRange1 = cardsSection.locator('.theCards [data-card-type="range1"]');
    await expect(gridCardRange1).toBeVisible();

    // mock Math.random to always pick a specific card
    await page.evaluate(() => {
      Math.random = () => 0;
    });

    // now buy one card
    const buyOneBtn = cardsSection.locator('button.buyOne');
    await buyOneBtn.click();

    // a card should appear with class `.showingNewCard`
    const showingCard = cardsSection.locator('> .showingNewCard:not(.hiding)');
    await expect(showingCard).toBeVisible();

    // the card shouldn't be showing the level because it hasn't leveled up
    const levelInsidePopup = showingCard.locator('.name .level');
    await expect(levelInsidePopup).not.toBeVisible();

    // take screenshot of the showing card
    await expect(page.locator('main')).toHaveScreenshot('showing-card-no-level.png');

    // dismiss the showing card by clicking on it
    await showingCard.click();
    await expect(showingCard).not.toBeVisible();

    // fast-forward to clean up dismissed cards
    await page.clock.fastForward(3000);

    // buy another card of a different type
    // mock Math.random to return 0.99 so it picks a different card
    await page.evaluate(() => {
      Math.random = () => 0.99;
    });

    await buyOneBtn.click();
    await expect(showingCard).toBeVisible();

    // dismiss the second showing card
    await showingCard.click();
    await expect(showingCard).not.toBeVisible();

    // fast-forward to clean up dismissed cards
    await page.clock.fastForward(3000);

    // verify that both cards are in the list and both have the highlight class
    const highlightedCards = cardsSection.locator('.theCards .bigCard.highlight');
    await expect(highlightedCards).toHaveCount(2);

    // take a screenshot of the cards grid showing multiple highlighted cards
    await expect(page.locator('main')).toHaveScreenshot('multiple-highlighted-cards.png');

    // buy the first card again, it will level up, verify it shows the level
    await page.evaluate(() => {
      Math.random = () => 0;
    });
    await buyOneBtn.click();
    await expect(showingCard).toBeVisible();
    await expect(levelInsidePopup).toBeVisible();
  });

  test('should trigger level highlight when leveling up a card', async ({ page }) => {
    // start with 2 range1 cards, so we need just 1 to level up
    await initializePage(page, {
      state: {
        level: 300,
        wallet: {
          wallet: { gem: 10000, coin: 0, card: 0 },
        },
        cards: {
          wallet: { range1: 2 },
        },
      },
    });

    await page.goto('./');
    await startGame(page);

    // go to cards section
    const cardsBtn = page.locator('#mainScreen .sectionButtons .cards');
    await cardsBtn.click();

    // verify the card is showing with the correct progress
    const gridCardRange1 = page.locator('.theCards [data-card-type="range1"]');
    await expect(gridCardRange1).not.toContainClass('highlight');

    // this shows how much we have and need for the next level
    await expect(gridCardRange1.locator('.level')).toHaveText('1');
    await expect(gridCardRange1.locator('.nextLevel .have')).toHaveText('1');
    await expect(gridCardRange1.locator('.nextLevel .outOf')).toHaveText('2');

    // mock Math.random to pick the first card - range1
    await page.evaluate(() => {
      Math.random = () => 0;
    });

    // buy one card, level up
    const buyOneBtn = page.locator('#cards button.buyOne');
    await buyOneBtn.click();

    // verify showing card
    const showingCard = page.locator('#cards > .showingNewCard:not(.hiding)');
    const showingNameEl = showingCard.locator('.name');
    await expect(showingCard).toBeVisible();
    await expect(showingNameEl).toContainClass('highlight');
    await expect(showingNameEl).toHaveText('Atlatl 2');

    // click it to dismiss
    await showingCard.click();
    await expect(showingCard).not.toBeVisible();

    // fast-forward to clean up dismissed cards
    await page.clock.fastForward(3000);

    // now range1 is leveled up to level 2 and we have 0 out of 2 cards to level 3
    await expect(gridCardRange1).toContainClass('highlight');
    await expect(gridCardRange1.locator('.name')).toContainClass('highlight');
    await expect(gridCardRange1.locator('.level')).toHaveText('2');
    await expect(gridCardRange1.locator('.nextLevel .have')).toHaveText('0');
    await expect(gridCardRange1.locator('.nextLevel .outOf')).toHaveText('2');

    // take screenshot of leveled card highlight
    await expect(page.locator('main')).toHaveScreenshot('leveled-card-highlight.png');

    // hide the cards section and open it again
    const exitBtn = page.locator('#cards .topBar .close');
    await exitBtn.click();
    await expect(page.locator('#cards')).toContainClass('inactive');
    await cardsBtn.click();
    await expect(page.locator('#cards')).not.toContainClass('inactive');

    // verify the card is no longer highlighted after reopening,
    // but still has the same level and progress details
    await expect(gridCardRange1).not.toContainClass('highlight');
    await expect(gridCardRange1.locator('.name')).not.toContainClass('highlight');
    await expect(gridCardRange1.locator('.level')).toHaveText('2');
    await expect(gridCardRange1.locator('.nextLevel .have')).toHaveText('0');
    await expect(gridCardRange1.locator('.nextLevel .outOf')).toHaveText('2');
  });
});

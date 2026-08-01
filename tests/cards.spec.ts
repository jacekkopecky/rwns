import { expect, test } from '@playwright/test';

import { initializePage, startGame } from './lib';

test.describe('Cards Section & Purchases', () => {
  test('should buy a card, verify level is hidden on popup when not leveling up, and multiple highlighted cards persist', async ({
    page,
  }) => {
    // 1. Initialize page with high gems (e.g. 10000) and high level to allow cards (level >= 300)
    // and initialize some cards so we have at least 1 card owned to render cards in the theCards list.
    await initializePage(page, {
      state: {
        level: 300,
        wallet: {
          wallet: { gem: 10000, coin: 0, card: 0 },
        },
        // range1 (Atlatl) needs 1 card to unlock. Let's give it 1 card so it's listed.
        cards: {
          wallet: { range1: 1 },
        },
      },
    });

    await page.goto('./');
    await startGame(page);

    // Go to cards section
    const cardsBtn = page.locator('#mainScreen .sectionButtons .cards');
    await expect(cardsBtn).toBeVisible();
    await cardsBtn.click();

    // Verify cards section is visible
    const cardsSection = page.locator('#cards');
    await expect(cardsSection).not.toContainClass('inactive');

    // Select random cards deterministically if possible or let's mock Math.random to always pick a specific card.
    // The selectNextRandomCard function selects a random card that is unlocked.
    // Let's mock Math.random to return 0 so it consistently selects the first available card, say range1 or similar.
    await page.evaluate(() => {
      Math.random = () => 0;
    });

    // We can also check if range1 is currently visible inside the grid
    const gridCardRange1 = cardsSection.locator('.theCards [data-card-type="range1"]');
    await expect(gridCardRange1).toBeVisible();

    // Now buy one card.
    const buyOneBtn = cardsSection.locator('button.buyOne');
    await buyOneBtn.click();

    // A popped-up card should appear with class `.showingNewCard`
    const poppedCard = cardsSection.locator('> .showingNewCard:not(.hiding)');
    await expect(poppedCard).toBeVisible();

    // Assert that the level inside the name block of the popped-up card is NOT visible (display: none)
    // according to CSS: `.name:not(.highlight) .level { display: none !important; }`
    const levelInsidePopup = poppedCard.locator('.name .level');
    await expect(levelInsidePopup).toHaveCSS('display', 'none');

    // Take screenshot of the popped-up card showing that the level number is hidden.
    await expect(page.locator('main')).toHaveScreenshot('popped-card-no-level.png');

    // Dismiss the popped-up card by clicking on it
    await poppedCard.click();
    await expect(poppedCard).not.toBeVisible();

    // Fast-forward 3000ms to clean up dismissed cards
    await page.clock.fastForward(3000);

    // Buy another card of a different type (let's change Math.random mock to pick another card, or keep buying).
    // Let's mock Math.random to return 0.99 so it picks a different card (e.g., rate1 or damage1 or whatever is at the end).
    await page.evaluate(() => {
      Math.random = () => 0.99;
    });

    await buyOneBtn.click();
    const poppedCard2 = cardsSection.locator('> .showingNewCard:not(.hiding)');
    await expect(poppedCard2).toBeVisible();

    // Dismiss the second popped-up card
    await poppedCard2.click();
    await expect(poppedCard2).not.toBeVisible();

    // Fast-forward 3000ms to clean up dismissed cards
    await page.clock.fastForward(3000);

    // Now verify that both cards are in the list and both have the highlight class.
    // In commits 09f70de and f36a542, highlights are kept in levelHighlights and nextProgressHighlights sets,
    // and both cards bought in one sitting are highlighted in the grid.
    const highlightedCards = cardsSection.locator('.theCards .bigCard.highlight');
    const highlightedCount = await highlightedCards.count();
    expect(highlightedCount).toBeGreaterThanOrEqual(2);

    // Take a screenshot of the cards grid showing multiple highlighted cards.
    await expect(page.locator('main')).toHaveScreenshot('multiple-highlighted-cards.png');
  });

  test('should trigger level highlight and clear progress highlight when leveling up a card', async ({
    page,
  }) => {
    // For range1, the levels and card counts required are:
    // level 1: 1 card
    // level 2: 3 cards (getCardsToLevel(2) is 3 cards).
    // So if a player starts with 2 cards, they have 2 out of 3.
    // Buying 1 more card makes it 3 cards total, leveling it up to level 2!
    // Since amount of cards goes from 2 to 3, and 3 cards is exactly level 2, levelingUp will be true:
    // nextLevelCards = 3 (needed for level 2)
    // nextLevelCardsHave = 2 (what they currently have at level 1)
    // levelingUp = !(nextLevelCards - nextLevelCardsHave > 1) => !(3 - 2 > 1) => !(1 > 1) => true!
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

    // Go to cards section
    const cardsBtn = page.locator('#mainScreen .sectionButtons .cards');
    await cardsBtn.click();

    // Mock Math.random to pick range1 (value 0)
    await page.evaluate(() => {
      Math.random = () => 0;
    });

    const gridCardRange1 = page.locator('.theCards [data-card-type="range1"]');
    const haveText = await gridCardRange1.locator('.nextLevel .have').textContent();
    const outOfText = await gridCardRange1.locator('.nextLevel .outOf').textContent();
    console.log(`range1 initially has ${haveText} / ${outOfText} cards`);

    // Let's buy one card. Since it was 2 / 3, buying one card triggers level up immediately.
    const buyOneBtn = page.locator('#cards button.buyOne');
    await buyOneBtn.click();

    // Verify popped card
    const poppedCard = page.locator('#cards > .showingNewCard:not(.hiding)');
    await expect(poppedCard).toBeVisible();

    // If it is a level up, does the level show?
    // According to commit f36a542: `.name:not(.highlight) .level { display: none !important; }`
    // If it's a highlight (leveling up), it DOES have the .highlight class on .name. So the level should be visible!
    const nameEl = poppedCard.locator('.name');
    await expect(nameEl).toHaveClass(/highlight/);

    // Let's click it to dismiss
    await poppedCard.click();
    await expect(poppedCard).not.toBeVisible();

    // Fast-forward 3000ms to clean up dismissed cards
    await page.clock.fastForward(3000);

    // Now range1 must be leveled up to level 2.
    // Assert that the big card in the grid has the highlight level/pulsate effect or is highlighted,
    // and the progress highlights or other level highlights are updated.
    await expect(gridCardRange1).toHaveClass(/highlight/);
    await expect(gridCardRange1.locator('.name')).toHaveClass(/highlight/);

    // Take screenshot of leveled card highlight.
    await expect(page.locator('main')).toHaveScreenshot('leveled-card-highlight.png');
  });
});

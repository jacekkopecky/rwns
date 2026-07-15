# High-Level Proposal: Game Functionality & Integration Tests for RWNS

This document outlines a comprehensive proposal for functional and integration tests for the RWNS
game codebase.

In alignment with the testing philosophy in `TESTING.md`:

- **Functional & Integration Tests** will run via Playwright in the `tests/` directory to verify
  core game logic, screen transitions, and state changes via the user interface.
- Visual regression and performance tests are excluded from this proposal.

---

## 1. Daily Gift Screen & Spinner Flow

### User-Facing GUI Integration Tests (Playwright)

- [x] **Daily Gift Popup Trigger & Suppression:**
  - File name: `tests/daily-gift.spec.ts`
  - _Test Scenario:_ When the page is loaded and a game starts in level 10, if `lastDailyGiftGiven`
    in the state is doesn't match today, the Daily Gift popup (`#dailyGift`) must automatically be
    displayed after a short delay upon entering the main screen.
  - _Test Scenario:_ If `lastDailyGiftGiven` is set to today's date, the Daily Gift popup must _not_
    appear.
  - _Test Scenario:_ When the page is loaded and a game starts in level 4, if `lastDailyGiftGiven`
    in the state is doesn't match today, the Daily Gift popup (`#dailyGift`) must _not_
    automatically appear.
- [x] **Spinner Spinning & Award Resolution:**
  - File name: `tests/daily-gift.spec.ts`
  - _Test Scenario:_ On the Daily Gift screen in level 10, clicking anywhere on the screen starts
    the spin. The spinner adds the `.spinning` CSS class. When the spin finishes (the `.spinning`
    class is removed), a further click anywhere takes the user to main screen with an updated state.
    Once on the main screen, the award (coins, gems, energy, or cards) is granted, and the top-bar
    wallet updates.
    - sub-scenarios: the test should check that money (gift 1, starting from 0), energy (gift 2),
      and gem (gift 3) is correctly added.
    - mocks: mock the function `pickWeightedItem()` to select the correct gift. Also mock timers so
      as not to have to wait for the spinning to finish. Also mock `animateValue()` to do nothing so
      that the wallet is updated immediately and the test doesn't have to wait for the animation to
      finish.
  - _Test Scenario:_ On the Daily Gift screen in level 10, clicking anywhere on the screen starts
    the spin. The spinner adds the `.spinning` CSS class. The second click within the spinning time
    limit stops the spinning but still shows the spinner; the third click then takes the user back
    to the main screen.
    - mocks: mock `pickWeightedItem()` to pick gift 1 for this test.
- [x] **Spin-Again Interaction:**
  - File name: `tests/daily-gift.spec.ts`
  - _Test Scenario:_ If the spinner lands on the "spin again" prize, the user is permitted to spin
    one more time. Use the second click to quickly stop the spinning, check that the whole state
    hasn't changed from how it was before the spin. Check that the subsequent spin causes the state
    to have a different `lastDailyGiftGiven` and a different content of wallet or energy.
    - mocks: mock the function `pickWeightedItem()` to select (gift 0).

---

## 2. Main Screen & Upgrades

### User-Facing GUI Integration Tests (Playwright)

todo check first few upgrade level prizes

- **Upgrade Button Cost & Level Display:**
  - _Test Scenario:_ Verify that upgrade buttons (rate, damage, players) initially show "Level 1"
    (internal level 0 + 1) and correctly display their respective purchase costs in coins.
  - _Test Scenario:_ If the player's wallet balance is lower than an upgrade's cost, the upgrade
    button must have the `.disabled` class applied and be unclickable.
- **Successful Upgrade Purchase Flow:**
  - _Test Scenario:_ Click an active upgrade button (e.g., "rate"). Verify that:
    1. Coins are deducted from the top-bar wallet (with animation).
    2. The displayed level increases to "Level 2".
    3. The button updates its next level cost.
    4. Internal state `runUpgradeLevels` is correctly set.
- **Maximum Level Cap Handling:**
  - _Test Scenario:_ When an upgrade level reaches its max allowed level (calculated from active
    cards/parameters), the button becomes permanently disabled and shows a "MAX" label instead of a
    coin cost.

---

## 3. Core Run Mechanics (Game Session)

### User-Facing GUI Integration Tests (Playwright)

todo add a run recorder and then make a test that takes a recorded run and replays it, expecting a
similar outcome.

- **Run Initiation & Energy Consumption:**
  - _Test Scenario:_ Clicking on the WebGL canvas when the main screen is active starts a run,
    transitioning the visible section to `#run` (removing the `inactive` class).
  - _Test Scenario:_ Verify starting a run deducts exactly 1 energy point from the energy bar. If
    energy is 0, clicking the canvas does _not_ start a run.
- **Run Screen Termination (Win / Loss UI Screens):**
  - _Test Scenario:_ When a run ends in a loss (all players dead), the Retry popup screen must be
    displayed. Clicking "Retry" must transition the player back to the Main Screen.
  - _Test Scenario:_ When a run ends in a win (all obstacles destroyed), the Next Level popup must
    be displayed. Clicking "Next Level" must increment the player's level, reset temporary run
    upgrades, and transition back to the Main Screen.
- **In-Run Quit Flow:**
  - _Test Scenario:_ Clicking the "Quit" button (`#quitBtn`) during an active run aborts the run,
    registers a play count increase (`played` counter incremented), and safely transitions back to
    the Main Screen.

---

## 4. Settings & Section Navigation

### User-Facing GUI Integration Tests (Playwright)

- **Section Transition Isolation (Inertness & Inactive class):**
  - _Test Scenario:_ Verify that only the active section is responsive. All other sections must have
    the `inactive` class applied and their `inert` HTML attribute set to `true`.
- **Reset State Functionality:**
  - _Test Scenario:_ Open the Settings screen, click the "Reset Game" button. Verify that:
    1. Local state is reset to default values.
    2. `localStorage` is cleared of old state data.
    3. Wallet, levels, and cards displays on the Main Screen return to their default starting
       states.

---

## 5. Card & Deck System

### User-Facing GUI Integration Tests (Playwright)

- **Cards Section Loading:**
  - _Test Scenario:_ Clicking on the cards shortcut from the Main Screen transitions the view to the
    `#cards` section, displaying a list of all available card types.
- **Card Upgrading / Purchase Action:**
  - _Test Scenario:_ If player has sufficient gems, clicking on a card pack or card upgrade button
    deducts the gem cost from the wallet and increases the card count/level.
  - _Test Scenario:_ If gems are insufficient, the purchase/upgrade buttons must be rendered
    disabled.

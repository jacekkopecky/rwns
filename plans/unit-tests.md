# High-Level Vitest Unit Test Proposal

This document outlines a high-level list of Vitest unit tests to be added for the non-GUI modules in
the `RWNS` codebase. These proposed tests focus entirely on pure logic, mathematical/layout
operations, and state-management utilities without requiring DOM or WebGL/Three.js 3D rendering.

---

## 1. Core Utilities (`src/common/utils/`)

### A. Parsing Utilities (`parsing.ts`)

_File to test:_ `src/common/utils/parsing.ts` _Proposed Test File:_
`src/common/utils/parsing.test.ts`

- **`parseNumber(value, defaultValue)` Scenario Tests:**
  - Return the number directly when `value` is a valid number.
  - Return `defaultValue` when `value` is `null` or `undefined` and a default value is provided.
  - Throw a `TypeError` when `value` is `null`/`undefined` and no default is provided.
  - Throw a `TypeError` and print `console.error` when `value` is a different type (e.g. string,
    object).
- **`parseString(value, defaultValue)` Scenario Tests:**
  - Return the string directly when `value` is a valid string.
  - Return `defaultValue` when `value` is `null` or `undefined` and a default value is provided.
  - Throw a `TypeError` when `value` is `null`/`undefined` and no default is provided.
  - Throw a `TypeError` when `value` is a non-string type.
- **`parseStringArray(value)` Scenario Tests:**
  - Return the input array exactly if it is an array containing only strings.
  - Return an empty array `[]` when `value` is `null` or `undefined`.
  - Throw a `TypeError` if `value` is not an array.
  - Throw a `TypeError` if `value` is an array containing any non-string elements (e.g.,
    `['ok', 42]`).

### B. Random Utilities (`random.ts`)

_File to test:_ `src/common/utils/random.ts` _Proposed Test File:_ `src/common/utils/random.test.ts`

- **PRNG Consistencies:**
  - Verify `createRandom(seed)` and `resetRandom(seed)` produce identical sequences of pseudo-random
    numbers when given the same seed.
- **`randomItem(arr, prng)` Scenario Tests:**
  - Pick an item from a non-empty array correctly.
  - Throw an error if the array is empty.
- **`randomIntInRange(min, max, prng)` Scenario Tests:**
  - Ensure outputs are always integers.
  - Ensure outputs always stay within the inclusive boundaries `[min, max]`.
  - Test edge case where `min === max`.
- **`removeRandomItem(arr, prng)` Scenario Tests:**
  - Verify that an item is picked, removed from the array (reducing `length` by 1), and returned.
  - Throw an error if the array is empty.
- **`randomItemInRange(arr, min, max, prng)` Scenario Tests:**
  - Verify the selected item comes from indices within `[min, max]`.
  - Throw an error if input boundaries are invalid (e.g. `min < 0`, `max < min`,
    `arr.length < max`).
- **`spacedRandomItems` and `spacedRandomIndexes` Scenario Tests:**
  - Return all items/indices if array length is less than or equal to `n`.
  - Verify that selected indexes are distributed evenly across partitioned intervals of the input
    array.
- **`randomXNotTooClose(minX, maxX, lastX, yDist, minDist)` Scenario Tests:**
  - Verify the returned coordinate is strictly between `minX` and `maxX`.
  - Ensure the distance constraints between the new coordinate and `lastX` are correctly calculated
    according to Pythagorean theorem inputs (`yDist`, `minDist`).
- **Weighted Selection (`pickMapWeightedItem` & `pickWeightedItem`) Scenario Tests:**
  - Throw an error on empty arrays.
  - Return the only item immediately if input contains only one element.
  - Mock `prng` values to verify correct bucket mapping based on specified weights.

### C. Animated Count (`animated-count.ts`)

_File to test:_ `src/common/utils/animated-count.ts` (Class `AnimatedCount` only) _Proposed Test
File:_ `src/common/utils/animated-count.test.ts`

- **Constructor & Initial State:**
  - Ensure `showing` and `target` properties are initialized to the constructor's `startingValue`.
  - Ensure `remainingTime` is initialized to the given `countTime`.
- **Adding & Target Updates:**
  - `add(amount)` correctly increments `target` and resets `remainingTime`.
  - `setTarget(target)` correctly updates target value and resets `remainingTime`.
- **`updateShowing(delta)` Math Interpolation:**
  - Verify that a `delta` >= `remainingTime` immediately completes the animation, setting
    `showing = target`, `remainingTime = 0`, and invoking the optional `onFinish` callback.
  - Given a small `delta`, verify that the intermediate values calculated using linear interpolation
    are clamped correctly, move strictly towards the target, and decrease the `remainingTime`.
  - Test both positive target animations (counting up) and negative target animations (counting
    down).

---

## 2. Card Management (`src/cards/`)

### A. Card Selection (`next-card.ts`)

_File to test:_ `src/cards/next-card.ts` _Proposed Test File:_ `src/cards/next-card.test.ts`

- **`isTypeAvailable` Logic:**
  - Verify that card types with a required player level higher than `state.level` are excluded.
  - Verify that card types where the player has already reached the maximum `cardsToGive` limit are
    excluded.
- **`selectNextRandomCard(state)` Weighted Rules:**
  - Return `undefined` or a single option if fewer than 2 cards are available.
  - Verify weighted distribution ratio matches defined rarity weights (common: 96, rare: 12, epic:
    3, legendary: 1) by mocking `Math.random`.

---

## 3. Game State Management (`src/state/`)

### A. Energy Calculations (`energy-state.ts`)

_File to test:_ `src/state/energy-state.ts` _Proposed Test File:_ `src/state/energy-state.test.ts`

- **`getEnergy` Calculations:**
  - If the state's energy is already at or above `params.energyMax`, return current energy
    immediately and do not regenerate.
  - Mock system time (`vi.setSystemTime`) to test progressive interval-based energy regeneration.
    Ensure energy increases by exactly `Math.floor(elapsed / interval)` up to `params.energyMax`,
    updates `lastEnergyGiven`, and calls `saveState`.
- **`subtractEnergy` Flow:**
  - Return `true` and do not subtract energy if in development mode or state energy is `Infinity`.
  - If energy is > 0, decrement energy by 1, correctly handle setting `lastEnergyGiven = Date.now()`
    if energy was at max, save state, and return `true`.
  - If energy is 0, verify it attempts to regenerate first; if it is still 0, return `false`.

### B. Daily Gift State (`daily-gift-state.ts`)

_File to test:_ `src/state/daily-gift-state.ts` _Proposed Test File:_
`src/state/daily-gift-state.test.ts`

- **`canGiveDailyGift` Logic:**
  - Return `false` if player level is less than the required threshold (level 5).
  - Return `false` if level is sufficient but `state.lastDailyGiftGiven` equals today's date string.
  - Return `true` if level is sufficient and `lastDailyGiftGiven` is from a prior date.
- **`setDailyGiftGivenToday` Logic:**
  - Update `_state.lastDailyGiftGiven` to today's date string, call `saveState`, and ensure
    persistence.

todo merge this into above

- **Probability Weighting and Prize Selection:**
  - _Test Scenario:_ Test `get12AvailablePrizes()` and `pickWeightedItem()` to ensure distribution
    matches expected mathematical weights under multiple simulated outcomes.
  - _Test Scenario:_ Ensure that if player has < 20 coins, only coin prizes are selectable
    (anti-softlock logic).
- **State Updates:**
  - _Test Scenario:_ Verify calling `setDailyGiftGivenToday()` correctly updates the state's
    `lastDailyGiftGiven` string to the current date in YYYY-MM-DD format.

### C. Feature Unlocks (`features.ts`)

_File to test:_ `src/state/features.ts` _Proposed Test File:_ `src/state/features.test.ts`

- **`isFeatureAllowed` Rules:**
  - Verify features are correctly locked/unlocked at their boundary levels:
    - `coins`: Unlock at level 2.
    - `limitedEnergy` / `rateUpgrade`: Unlock at level 4.
    - `dailyGift`: Unlock at level 5.
    - `damageUpgrade`: Unlock at level 10.
    - `playersUpgrade`: Unlock at level 20.
    - `gems`: Unlock at level 14.
    - `cards`: Unlock at level 15.
- **`handleLevelChanges` State Transition:**
  - Transitioning from a low level (< 4) to level 4: verify state energy becomes limited and
    initializes to `params.energyMax`.
  - Under level 4, verify state energy remains `Infinity`.

### D. Core State & Storage (`state.ts`, `storage.ts`)

_Files to test:_ `src/state/state.ts`, `src/state/storage.ts` _Proposed Test File:_
`src/state/state.test.ts`

- **Initial State:**
  - Verify `createInitialState` constructs state with level 1, infinite energy, today's start date,
    and empty collections.
- **Modifications & Save Actions:**
  - Call state mutations (`addAward`, `addCards`, `pay`, `increaseLevel`, `increasePlayed`,
    `setRunUpgradeLevel`, `collectGem`) and verify that they mutate `_state` correctly and trigger
    `saveState` (mocking `localStorage.setItem`).
- **Serialization/Deserialization Safeguards (`loadState`):**
  - Verify loading a valid state from `localStorage` parses values correctly.
  - Verify loading corrupted JSON catches errors gracefully, backs up the corrupted state to a
    timestamped backup key, and returns `null`.

---

## 4. Track & Level Math (`src/run/levels/`)

### A. Level Bag Distribution (`levels-4-xx.ts`)

_File to test:_ `src/run/levels/levels-4-xx.ts` (Specifically the helper `coinBagAmounts`) _Proposed
Test File:_ `src/run/levels/coin-bag-amounts.test.ts`

- **`coinBagAmounts(bags, total)` Scenario Tests:**
  - If total coins is less than or equal to `bags`, verify it returns an array of size `total` with
    each bag containing `1` coin.
  - Verify the sum of coins in all bags in the returned array is exactly equal to `total`.
  - Verify the output array length matches the `bags` parameter.
  - Verify that coin amounts are spread evenly (with variation controlled by a spread factor) to
    ensure a smooth level progression experience.

### B. Object & Procedural Layout Math (`tools.ts`, `index.ts`)

_Files to test:_ `src/run/levels/tools.ts`, `src/run/levels/index.ts` _Proposed Test File:_
`src/run/levels/layout.test.ts`

- **Level Layout Hardness Scaling:**
  - Verify `level4Plus(state, params)` returns objects with hitPoints scaled exponentially by
    `difficultyIncreasePerLevel` based on the player's level.
- **Gem Guarantee Logic:**
  - Verify `ensureGuaranteedGems` successfully converts collected gems to anonymous gems (setting ID
    to `undefined`) if the player's run requires more guaranteed gems than are currently available.
- **Fallback Behavior:**
  - Mock an exception in a level generator and verify `createLevelObjects` catches it gracefully,
    logs the error, and falls back to generating the first level.

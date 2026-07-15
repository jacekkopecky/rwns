# Testing this game

This game is tested on two levels:

- unit tests next to code in `src/` for non-GUI functions
- playwright tests in `tests/` for end-to-end integration

Unit testing: verifying that non-UI functions work to requirements. These should be written in
idiomatic vitest patterns.

Functional testing: verifying that game logic works (e.g., "when I click this button, the game state
updates correctly").

Visual regression testing: ensuring that the UI and the 3D scene looks exactly as expected and
doesn't change unexpectedly between builds. To update playwright snapshots (visual regression
testing screenshots), use `npm run test:e2e-update-snapshots`

Integration testing: checking that the various features interact with each other as expected.

I would ultimately like to have a good code coverage with functional and integration testing, and a
basic level of visual regression testing. I'm comfortable with some functional tests accessing the
internals such as `window.gameState` and `Three.js` objects (there is `window.gameScene` and
`window.gameCamera`, for example - look for the use of `exposeGlobalWindowProp()` and matching
definitions in `tests/modules.d.ts`). Integration tests should go by the user interface.

Functional, visual and integration tests should be written in idiomatic Playwright patterns.

In code review, if some code is repeated across tests, feel free to add it to `tests/lib.ts`

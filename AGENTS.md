# Instructions for agents

## Coding instructions

- Do NOT change configuration and ignore files unless specifically asked.
- Do NOT add new dependencies unless specifically asked.
- Do NOT change existing tests without asking.
- Do NOT override linter rules.
- Do NOT compliment the user on their suggestions.
- Do NOT commit any changes in `docs/` because those files are built separately and manually, when a
  release is ready.
- Do NOT add comments that are clear from the context.
- Use lowercase starting letter in single-sentence comments, and no ending period.

## Testing instructions

- To inspect it visually, use mobile emulation with portrait-mode screen.
- To run all tests, run `npm run test-all`
- To focus on one unit test, add the Vitest pattern: `npx vitest run -t "<test name>"`.
- To focus on one playwright test file, add the playwright pattern:
  `npx playwright test "tests/<file-name>"`.
- Fix any test or type errors until the whole suite passes.
- Add tests for new code, even if nobody asked.

See the file `./TESTING.md` for information about the approach to testing here.

## PR instructions

- Always run `npm run test-all` before committing.

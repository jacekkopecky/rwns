# Versioning RWNS

Version 1 is in the main branch. Future versions can live in branches such as `v2`.

Version 1 is available at https://jacekkopecky.github.io/rwns/

Other versions will be available at https://jacekkopecky.github.io/rwns/v2 and so on.

## Starting work on a new version

- create a new branch
- update `package.json` with the new version such as 2.0.0
- update `vite.config.js` with a new `outDir` such as `docs-v2`
- update `index.html` with a new version statement, keep the commit SHA there
- update `src/state/storage.ts` with a new state key

## Deployment

Just use `npm run build-and-commit` on the right branch, it does everything.

import type { ReadonlyState } from '#types/state.ts';

// tests need to know what the game exposes in window

declare global {
  interface Window {
    gameState: ReadonlyState;
    RWNS_TESTS?: boolean;
  }
}

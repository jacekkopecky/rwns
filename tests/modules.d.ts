import type * as THREE from 'three';

import type { ReadonlyState } from '#types/state.ts';

/**
 * Tests need to know what the game exposes in window.
 */
declare global {
  interface Window {
    gameState: ReadonlyState;
    gameScene?: THREE.Scene;
    gameDoRender: () => void;

    RWNS_TESTS?: boolean;
    RWNS_LOCAL_STORAGE_KEY?: string;

    _testData?: unknown;
  }
}

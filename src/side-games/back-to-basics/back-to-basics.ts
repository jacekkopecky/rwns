import type { ReadonlyState } from '#types';
import {
  fillOrHide,
  getEl,
  getToday,
  getTodayPlusDays,
  randomIntInRange,
  toggleHidden,
} from '#utils';

import { toggleRunInfo } from '../../main-screen';
import { prepareRun } from '../../run';
import { fadeTo, showSection } from '../../sections';
import {
  getUpgradablePermanentParameters,
  increaseLevel,
  isFeatureAllowed,
  readState,
} from '../../state';

const el = {
  backToBasicsBtn: getEl('#mainScreen .sectionButtons .backToBasics'),
  closeBtn: getEl('#backToBasics .closeBtn'),
  playStats: {
    played: getEl('#backToBasics .playStats .played'),
  },
};

export function init() {
  el.backToBasicsBtn.addEventListener('click', () =>
    fadeTo('backToBasics', 'Humble Beginnings', 'calm-lotus'),
  );
  el.closeBtn.addEventListener('click', () => fadeTo('mainScreen'));
}

export function updateVisibility(state: ReadonlyState) {
  const showBackToBasics =
    isFeatureAllowed('backToBasics', state) &&
    getToday() >= state.sideGames.backToBasics.nextAllowed;

  toggleHidden(el.backToBasicsBtn, !showBackToBasics);
}

export function showBackToBasicsScreen() {
  toggleRunInfo(false);

  const realState = readState();
  fillOrHide(el.playStats.played, realState.sideGames.backToBasics.played, String);

  // pretend we're in level 1, and reset run upgrades
  const state = {
    ...realState,
    level: 1,
    runUpgradeLevels: {},
  };

  const params = getUpgradablePermanentParameters('backToBasics');

  prepareRun({
    state,
    params,
    type: 'backToBasics',
    objects: {
      customMessage:
        realState.sideGames.backToBasics.level === 1
          ? 'remember how\u00a0calm it\u00a0all once was?'
          : '',
    },
    endButtons: {
      retry: 'OK',
      progress: 'OK',
      hideRetryOnWin: true,
    },
    onProgress() {
      increaseLevel('backToBasics');
      void fadeTo('mainScreen');
    },
    onRetry() {
      showSection('backToBasics');
    },
  });
}

export function startPlaying(): boolean {
  // we can always start this mini-game, if the user got the button to get them to this point
  return true;
}

export function pickNextBackToBasicsDate() {
  return getTodayPlusDays(randomIntInRange(12, 16, Math.random));
}

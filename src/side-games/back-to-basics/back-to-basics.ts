import { getEl } from '#utils';

import { toggleRunInfo } from '../../main-screen';
import { prepareRun } from '../../run';
import { fadeTo, showSection } from '../../sections';
import { getUpgradablePermanentParameters, readState } from '../../state';

const el = {
  backToBasicsBtn: getEl('#mainScreen .sectionButtons .backToBasics'),
  closeBtn: getEl('#backToBasics .closeBtn'),
};

export function init() {
  el.backToBasicsBtn.addEventListener('click', () =>
    fadeTo('backToBasics', 'Humble Beginnings', 'calm-lotus'),
  );
  el.closeBtn.addEventListener('click', () => fadeTo('mainScreen'));
}

export function showBackToBasicsScreen() {
  toggleRunInfo(false);

  // pretend we're in level 1, and reset run upgrades
  const state = {
    ...readState(),
    level: 1,
    runUpgradeLevels: {},
  };

  const params = getUpgradablePermanentParameters('backToBasics');

  prepareRun({
    state,
    params,
    type: 'backToBasics',
    objects: { customMessage: 'remember how\u00a0calm it\u00a0all once was?' },
    endButtons: {
      retry: 'OK',
      progress: 'OK',
      hideRetryOnWin: true,
    },
    onProgress() {
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

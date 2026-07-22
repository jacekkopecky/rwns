import type { ReadonlyState } from '#types';

import { updateVisibility as updateBackToBasicsVisibility } from './back-to-basics';

export { pickNextBackToBasicsDate } from './back-to-basics';

export function updateSideGamesVisibility(state: ReadonlyState) {
  // when we have more side games, possibly limit the number of them that are visible at the same time
  updateBackToBasicsVisibility(state);
}

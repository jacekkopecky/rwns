import { minLevelForCards } from '../../cards/constants';
import { minLevelForButterfly } from '../../state/features';

export const LEVEL_MESSAGES = Array<string>();

LEVEL_MESSAGES[4] = 'from now on\nit gets harder';
LEVEL_MESSAGES[5] = 'level upgrades reset\nin every level';
LEVEL_MESSAGES[minLevelForButterfly] = 'hope you like butterflies';
LEVEL_MESSAGES[minLevelForCards - 1] = 'get gems by shooting them';
LEVEL_MESSAGES[minLevelForCards] = 'spend gems on cards,\nthey do not reset';

import { minLevelForCards } from '../../cards/constants';

export const LEVEL_MESSAGES = Array<string>();

LEVEL_MESSAGES[4] = 'from now on\nit gets harder';
LEVEL_MESSAGES[5] = 'level upgrades reset\nin every level';
LEVEL_MESSAGES[minLevelForCards - 1] = 'get gems by shooting them';
LEVEL_MESSAGES[minLevelForCards] = 'spend gems on cards,\nthey do not reset';

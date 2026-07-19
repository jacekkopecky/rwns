import { getToday, parseNumber, parseObject, parseString } from '#utils';

export interface SideGamesState {
  backToBasics: BackToBasicsState;
}

interface BackToBasicsState {
  level: number;
  played: number;
  nextAllowed?: string; // iso8601 date yyyy-mm-dd
}

export function parseSideGames(data: unknown): SideGamesState {
  const obj = parseObject(data, 'sideGames');

  const retval = {
    backToBasics: parseBackToBasicsState(obj?.backToBasics),
  };

  return retval;
}

function parseBackToBasicsState(data: unknown): BackToBasicsState {
  const obj = parseObject(data, 'backToBasics');

  return {
    level: parseNumber(obj?.level, 1),
    played: parseNumber(obj?.played, 0),
    nextAllowed: parseString(obj?.startDate, getToday()),
  };
}

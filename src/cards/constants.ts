import { cardDefinitions } from './types';

export const minLevelForCards = Math.min(
  ...Object.values(cardDefinitions).map((card) => card.minPlayerLevel),
);

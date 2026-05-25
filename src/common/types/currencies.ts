export const CURRENCIES = ['coin', 'gem', 'card'] as const;
export type CurrencyType = (typeof CURRENCIES)[number];

export interface Currency {
  type: CurrencyType;
  amount: number;
}

export function isCurrency(x: string): x is CurrencyType {
  return CURRENCIES.includes(x as CurrencyType);
}

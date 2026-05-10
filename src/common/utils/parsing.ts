export function parseNumber(value: unknown, defaultValue?: number): number {
  if (typeof value === 'number') return value;
  if (value == null && defaultValue != null) return defaultValue;

  throw new TypeError(`expected number, got ${value}`);
}

export function parseStringArray(value: unknown): string[] {
  if (Array.isArray(value) && value.every((item) => typeof item === 'string')) return value;
  if (value == null) return [];

  throw new TypeError(`expected a string array, got ${value}`);
}

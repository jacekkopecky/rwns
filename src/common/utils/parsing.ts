export function parseNumber(value: unknown, defaultValue?: number): number {
  if (typeof value === 'number') return value;
  if (value == null && defaultValue != null) return defaultValue;

  console.error('bad value', value);
  throw new TypeError('expected number');
}

export function parseString(value: unknown, defaultValue?: string): string {
  if (typeof value === 'string') return value;
  if (value == null && defaultValue != null) return defaultValue;

  console.error('bad value', value);
  throw new TypeError('expected string');
}

export function parseStringArray(value: unknown): string[] {
  if (Array.isArray(value) && value.every((item) => typeof item === 'string')) return value;
  if (value == null) return [];

  console.error('bad value', value);
  throw new TypeError('expected a string array');
}

export function parseObject(data: unknown, label: string): Record<string, unknown> | undefined {
  if (data == null) return undefined;
  if (typeof data !== 'object') {
    throw new TypeError(`malformed ${label} data`);
  }

  return data as Record<string, unknown>;
}

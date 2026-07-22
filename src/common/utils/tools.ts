export function getToday(): string {
  return new Date().toISOString().split('T')[0]!;
}

export function getTodayPlusDays(days: number): string {
  const date = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  return date.toISOString().split('T')[0]!;
}

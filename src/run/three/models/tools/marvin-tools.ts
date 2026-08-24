export function marvinTurnTimeEasing(f: number) {
  switch (true) {
    case f < 0.1:
      return f / 2;
    case f < 0.9:
      return 0.05 + ((f - 0.1) / 8) * 9;
    default:
      return 0.95 + (f - 0.9) / 2;
  }
}

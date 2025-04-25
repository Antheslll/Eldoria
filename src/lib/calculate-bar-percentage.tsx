export function calculateBarPercentage(current: number, max: number) {
  const result = Math.round((current / max) * 100);

  return `${result}%`;
}

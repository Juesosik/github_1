export type Platform = 'tiktok' | 'meta' | 'google';

export function calculateServiceFee(platform: Platform, amountUsd: number): number {
  const rate = platform === 'tiktok' ? 0.03 : 0.07;
  return Math.round(amountUsd * rate * 100) / 100;
}

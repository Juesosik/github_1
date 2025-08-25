import { describe, expect, it } from 'vitest';
import { calculateServiceFee } from '../src/fees';

describe('calculateServiceFee', () => {
  it('applies 3% for TikTok', () => {
    expect(calculateServiceFee('tiktok', 100)).toBe(3);
  });
  it('applies 7% for Meta', () => {
    expect(calculateServiceFee('meta', 100)).toBe(7);
  });
});

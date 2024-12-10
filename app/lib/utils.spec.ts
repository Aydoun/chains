import { formatCurrency, formatNumber } from './utils';

describe('formatCurrency', () => {
  it('should format a number as USD currency', () => {
    const result = formatCurrency(123456);
    expect(result).toBe('$1,234.56');
  });

  it('should format 0 correctly as currency', () => {
    const result = formatCurrency(0);
    expect(result).toBe('$0.00');
  });

  it('should handle negative amounts correctly', () => {
    const result = formatCurrency(-5000);
    expect(result).toBe('-$50.00');
  });

  it('should format large amounts correctly', () => {
    const result = formatCurrency(1000000000);
    expect(result).toBe('$10,000,000.00');
  });
});

describe('formatNumber', () => {
  it('should format numbers less than 1000 without modification', () => {
    const result = formatNumber(999);
    expect(result).toBe(999);
  });

  it('should format numbers in the thousands with "K"', () => {
    const result = formatNumber(12345);
    expect(result).toBe('12.3K');
  });

  it('should format numbers in the millions with "M"', () => {
    const result = formatNumber(12345678);
    expect(result).toBe('12.3M');
  });

  it('should handle numbers exactly at 1000 and 1,000,000 correctly', () => {
    const result1 = formatNumber(1000);
    expect(result1).toBe('1.0K');

    const result2 = formatNumber(1000000);
    expect(result2).toBe('1.0M');
  });

  it('should handle negative numbers correctly', () => {
    const result = formatNumber(-1500);
    expect(result).toBe('-1.5K');
  });

  it('should format decimal values correctly', () => {
    const result = formatNumber(1500.5);
    expect(result).toBe('1.5K');
  });
});

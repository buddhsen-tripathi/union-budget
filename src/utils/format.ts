import { AmountInCrore } from '../types';

/**
 * Format amount in Crores using Indian numbering system
 * @param amount - Amount in Crores
 * @param options - Formatting options
 * @returns Formatted string like "5,98,520 Cr" or "5.98 L Cr"
 */
export function formatCrore(
  amount: AmountInCrore | undefined | null,
  options: {
    showSymbol?: boolean;
    compact?: boolean; // Use Lakh Crore for large numbers
  } = {}
): string {
  const { showSymbol = true, compact = false } = options;

  if (amount === undefined || amount === null || amount === 0) {
    return '-';
  }

  const prefix = showSymbol ? '₹' : '';

  // For compact mode, show in Lakh Crore if >= 1 lakh crore (100000 Cr)
  if (compact && amount >= 100000) {
    const lakhCrore = amount / 100000;
    return `${prefix}${lakhCrore.toFixed(2)} L Cr`;
  }

  // Use Indian locale for comma formatting (12,34,567)
  const formatted = amount.toLocaleString('en-IN');
  return `${prefix}${formatted} Cr`;
}

/**
 * Format percentage with sign indicator
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

/**
 * Format large numbers in Indian style (Lakhs, Crores)
 */
export function formatIndianNumber(num: number): string {
  return num.toLocaleString('en-IN');
}

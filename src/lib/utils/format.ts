// utils/format.ts

import { format } from 'date-fns';

/**
 * Formats a number into a currency string (e.g., $1,000).
 * @param amount - The amount to format.
 * @returns Formatted currency string.
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats a number with commas as thousand separators (e.g., 1,000).
 * @param num - The number to format.
 * @returns Formatted number string.
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Truncates a string to a specified maximum length and appends an ellipsis (...).
 * @param text - The text to truncate.
 * @param maxLength - Maximum allowed length.
 * @returns Truncated string with ellipsis if needed.
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * Formats a date object into a time string (e.g., 3:30 PM).
 * @param date - The date object to format.
 * @returns Formatted time string.
 */
export const formatTime = (date: Date): string => {
  return format(date, 'h:mm a');
};

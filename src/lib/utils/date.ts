import { format, formatDistanceToNow } from 'date-fns';

export const formatMessageTime = (date: Date): string => {
  return format(date, 'h:mm a');
};

export const formatLastActive = (date: Date): string => {
  return formatDistanceToNow(date, { addSuffix: true });
};

export const formatDate = (date: Date): string => {
  return format(date, 'MMM d, yyyy');
};
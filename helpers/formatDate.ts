export const formatDate = (date: Date, onlyMonth?: boolean) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  };

  if (!onlyMonth) options.day = 'numeric';

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

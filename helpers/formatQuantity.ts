export const formatQuantity = (qty: number, noun: string) => {
  return qty === 1 ? `${qty} ${noun}` : `${qty} ${noun}s`;
};

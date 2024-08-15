import { calculateDaysBetween } from '@/utils/calendar';

type PropTypes = {
  checkIn: Date;
  checkOut: Date;
  price: number;
};

export const calculateTotals = ({ checkIn, checkOut, price }: PropTypes) => {
  const totalNights = calculateDaysBetween({ checkIn, checkOut });

  const subTotal = totalNights * price;

  const serviceFee = 20;
  const cleaningFee = 10;
  const tax = subTotal * 0.18;

  const orderTotal = subTotal + cleaningFee + serviceFee + tax;

  return { totalNights, subTotal, serviceFee, cleaningFee, tax, orderTotal };
};

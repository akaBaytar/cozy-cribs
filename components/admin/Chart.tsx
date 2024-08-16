'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

type PropType = {
  data: {
    date: string;
    count: number;
  }[];
};

const Chart = ({ data }: PropType) => {
  return (
    <section className='mt-8'>
      <h1 className='text-2xl font-semibold text-center'>Monthly Bookings</h1>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data} margin={{ top: 30 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Bar
            dataKey='count'
            fill='#f97215'
            barSize={50}
            className='rounded-md'
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;

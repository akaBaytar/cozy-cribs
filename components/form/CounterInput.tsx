'use client';

import { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

import { Card, CardHeader } from '../ui/card';
import { Button } from '../ui/button';

type CounterProps = {
  detail: string;
  defaultValue?: number;
};

const CounterInput = ({ detail, defaultValue }: CounterProps) => {
  const [count, setCount] = useState(defaultValue || 0);

  const increase = () => setCount((prev) => prev + 1);

  const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <Card className='mb-4'>
      <input type='hidden' name={detail} value={count} />
      <CardHeader className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-4 md:items-center sm:flex-row justify-between'>
          <div className='flex flex-col'>
            <h2 className='font-medium capitalize'>{detail}</h2>
            <p className='text-muted-foreground text-sm'>
              Specify the number of {detail}.
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={decrease}>
              <LuMinus className='w-5 h-5 text-primary' />
            </Button>
            <span className='text-xl font-bold w-5 text-center'>{count}</span>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={increase}>
              <LuPlus className='w-5 h-5 text-primary' />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CounterInput;

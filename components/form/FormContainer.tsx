'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import { useToast } from '../ui/use-toast';
import { actionFunction } from '@/types';

type FormContainerProps = {
  action: actionFunction;
  children: React.ReactNode;
};

const initialState = { message: '' };

const FormContainer = ({ action, children }: FormContainerProps) => {
  const [state, formAction] = useFormState(action, initialState);

  const { toast } = useToast();

  useEffect(() => {
    if (state.message) toast({ description: state.message });
  }, [state, toast]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;

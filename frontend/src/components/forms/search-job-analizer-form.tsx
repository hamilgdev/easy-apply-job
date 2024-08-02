'use client';

import { Input, Button, ReloadIcon } from '@/components';
import { useState } from 'react';
import { ErrorAlertMsg } from './inputs/error-alert-msg';

const URL_PATTERN = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/i;

export const SearchJobAnalizerForm = ({
  onSubmit,
  isLoading,
}: {
  isLoading: boolean;
  onSubmit: ({ url }: { url: string }) => void;
}) => {
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;

    if (!url) setError('Por favor, ingresa una URL válida.');
    else if (!URL_PATTERN.test(url))
      setError('La URL ingresada debe ser http o https.');
    else setError('');

    setUrl(url);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ url });
    setError('');
  };

  return (
    <form
      className='w-full max-w-lg flex justify-center flex-col'
      onSubmit={handleSubmit}
    >
      <div className='flex w-full items-center space-x-2'>
        <Input
          className='flex-1'
          type='search'
          value={url}
          onChange={handleChange}
          placeholder='https://www.tecnoempleo.com/fullstack-developer'
        />
        <Button
          className='flex gap-1'
          type='submit'
          disabled={!url || !URL_PATTERN.test(url) || isLoading}
        >
          {isLoading && <ReloadIcon className='animate-spin' size='sm' />}
          Analizar
        </Button>
      </div>
      {error && <ErrorAlertMsg msg={error} />}
    </form>
  );
};

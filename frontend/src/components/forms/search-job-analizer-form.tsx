'use client';

import { Input, Button } from '@/components';
import { useOfferAnalyzer } from '@/hooks/use-offer-analyzer';
import { userInformationStore } from '@/store';
import { useState } from 'react';

const URL_PATTERN = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/i;

const ValidationErrorMsg = ({ msg }: { msg: string }) => {
  return (
    <div className='text-red-500 text-sm'>
      <p>{msg}</p>
    </div>
  );
};

export const SearchJobAnalizerForm = ({
  onHandleStepNext,
}: {
  onHandleStepNext: () => void;
}) => {
  const { handleGetOfferAnalyzer } = useOfferAnalyzer({
    onHandleStepNext,
  });

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
    handleGetOfferAnalyzer({ url });
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
        <Button type='submit' disabled={!url || !URL_PATTERN.test(url)}>
          Analizar
        </Button>
      </div>
      {error && <ValidationErrorMsg msg={error} />}
    </form>
  );
};

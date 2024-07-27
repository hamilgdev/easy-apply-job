import { Input, Button } from '@/components';

export const SearchJobAnalizerForm = () => {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input
        type='search'
        placeholder='https://www.tecnoempleo.com/fullstack-developer'
      />
      <Button type='submit'>Analizar</Button>
    </div>
  );
};

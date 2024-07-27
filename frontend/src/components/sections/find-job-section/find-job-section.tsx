import { SearchJobAnalizerForm } from '@/components';

export const FindJobSection = () => {
  return (
    <section>
      <div className='flex justify-center items-center flex-col mb-2'>
        <h2 className='text-lg font-semibold text-gray-800'>
          Encuentra tu oferta laboral
        </h2>
        <p className='text-sm text-gray-500 mb-4'>
          Ingrese la URL de la oferta y la analizaremos para darte la mejor
          recomendación
        </p>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <SearchJobAnalizerForm />
      </div>
    </section>
  );
};

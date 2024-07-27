import { DropzoneForm, TimelineStepper } from '@/components';

export const UploadCVSection = () => {
  return (
    <section>
      <h2 className='text-lg font-semibold text-gray-800'>
        Tu próximo trabajo te espera
      </h2>
      <p className='text-sm text-gray-500 mb-4'>
        Sube tu CV y aplica a la oferta de trabajo que deseas en tan solo 3
        pasos
      </p>
      <DropzoneForm />
    </section>
  );
};

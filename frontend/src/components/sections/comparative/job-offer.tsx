import { Separator } from '@/components';
import { JobOfferComparison } from '@/interfaces';

interface JobOfferProps {
  jobOffer?: JobOfferComparison;
}

export const JobOffer = ({ jobOffer }: JobOfferProps) => {
  return (
    <div className='bg-card'>
      <h2 className='text-2xl font-bold mb-4'>Detalles de la oferta laboral</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <h3 className='text-lg font-medium'>Compañía</h3>
          <p className='text-gray-500'>{jobOffer?.company_name}</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Puesto disponible</h3>
          <p className='text-gray-500'>{jobOffer?.title}</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Salario</h3>
          <p className='text-gray-500'>{jobOffer?.salary || '-'}</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Tipo de trabajo</h3>
          <p className='text-gray-500'>{jobOffer?.job_type || '-'}</p>
        </div>
      </div>
      <Separator className='my-4' />
      <h3 className='text-lg font-medium mb-2'>Responsabilidades claves</h3>
      <ul className='list-disc pl-6 text-muted-foreground'>
        {jobOffer?.key_responsibilities?.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

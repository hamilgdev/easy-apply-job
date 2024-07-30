import { Separator } from '@/components';
import { JobOfferComparison } from '@/interfaces';

interface JobOfferProps {
  jobOffer?: JobOfferComparison;
}

export const JobOffer = ({ jobOffer }: JobOfferProps) => {
  return (
    <div className='bg-card p-6 rounded-lg shadow-lg col-span-2'>
      <h2 className='text-2xl font-bold mb-4'>Detalles de la oferta laboral</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h3 className='text-lg font-medium'>Compañía</h3>
          <p>{jobOffer?.company_name}</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Puesto disponible</h3>
          <p>{jobOffer?.title}</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Salario</h3>
          <p>{jobOffer?.salary || '-'}</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Tipo de trabajo</h3>
          <p>{jobOffer?.job_type}</p>
        </div>
      </div>
      <Separator className='my-4' />
      <h3 className='text-lg font-medium'>Responsabilidades claves</h3>
      <ul className='list-disc pl-6 text-muted-foreground'>
        {jobOffer?.key_responsibilities?.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

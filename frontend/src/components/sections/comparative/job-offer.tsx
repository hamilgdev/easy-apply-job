import { Separator } from '@/components';

export const JobOffer = () => {
  return (
    <div className='bg-card p-6 rounded-lg shadow-lg col-span-2'>
      <h2 className='text-2xl font-bold mb-4'>Job Offer Details</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h3 className='text-lg font-medium'>Company</h3>
          <p>Acme Inc.</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Job Title</h3>
          <p>Full-Stack Developer</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Salary Range</h3>
          <p>$80,000 - $100,000</p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Location</h3>
          <p>San Francisco, CA</p>
        </div>
      </div>
      <Separator className='my-4' />
      <h3 className='text-lg font-medium'>Key Responsibilities</h3>
      <ul className='list-disc pl-6 text-muted-foreground'>
        <li>Develop and maintain web applications using modern frameworks</li>
        <li>
          Collaborate with cross-functional teams to deliver high-quality
          software
        </li>
        <li>Participate in code reviews and contribute to the codebase</li>
        <li>Identify and implement performance improvements</li>
      </ul>
    </div>
  );
};

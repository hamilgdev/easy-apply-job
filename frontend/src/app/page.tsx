import { DropzoneForm, TimelineStepper } from '@/components';

export default function Home() {
  return (
    <>
      <header className='py-2 bg-background border-b flex items-center justify-between'>
        <div className='l-container'>
          <h1 className='text-1xl font-semibold text-gray-500'>
            🧳 Easy Apply Job
          </h1>
        </div>
      </header>

      <main className='relative l-container flex flex-row  min-h-screen py-12 gap-8'>
        <aside className='sticky h-fit top-12'>
          <TimelineStepper />
        </aside>

        <section className='flex-1 p-8 bg-white rounded-lg shadow-lg'>
          <h2 className='text-lg font-semibold text-gray-800'>
            Tu próximo trabajo te espera
          </h2>
          <p className='text-sm text-gray-500 mb-4'>
            Sube tu CV y aplica a la oferta de trabajo que deseas en tan solo 3
            pasos
          </p>
          <DropzoneForm />
        </section>
      </main>
    </>
  );
}

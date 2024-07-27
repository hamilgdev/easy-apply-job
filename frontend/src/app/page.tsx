import { FindJobSection, TimelineStepper, UploadCVSection } from '@/components';

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

        <div className='flex-1 p-8 bg-white rounded-lg shadow-lg'>
          {/* <UploadCVSection /> */}
          <FindJobSection />
        </div>
      </main>
    </>
  );
}

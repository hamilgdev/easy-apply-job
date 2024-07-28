'use client';

import { FileUploadIcon } from '@/components';
import { useUploadFile } from '@/hooks/use-files';

export const DropzoneForm = ({
  onHandleStepNext,
}: {
  onHandleStepNext: () => void;
}) => {
  const { handleUploadFile, isLoading } = useUploadFile({
    onHandleStepNext,
  });

  return (
    <div className='flex items-center justify-center w-full'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <FileUploadIcon />
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click para cargar</span> o arrastra
            tu CV aquí
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            Solo archivos PDF
          </p>
        </div>
        <input
          id='dropzone-file'
          type='file'
          accept='application/pdf'
          className='hidden'
          onChange={handleUploadFile}
          disabled={isLoading}
        />
      </label>
    </div>
  );
};

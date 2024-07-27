export const AITips = () => {
  return (
    <div className='bg-card p-6 rounded-lg shadow-lg col-span-1 md:col-span-3'>
      <h2 className='text-2xl font-bold mb-4'>Tips to Improve Your CV</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <h3 className='text-lg font-medium'>Highlight Relevant Skills</h3>
          <p className='text-muted-foreground'>
            Ensure your CV showcases the skills and experience that are most
            relevant to the job offer, such as full-stack development,
            problem-solving, and project management.
          </p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Optimize Formatting</h3>
          <p className='text-muted-foreground'>
            Use a clean and organized layout to make your CV easy to read.
            Consider using bullet points, clear section headings, and consistent
            formatting throughout.
          </p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Tailor Your Achievements</h3>
          <p className='text-muted-foreground'>
            Customize your CV to highlight the specific achievements and
            accomplishments that are most relevant to the job offer. Quantify
            your impact whenever possible.
          </p>
        </div>
        <div>
          <h3 className='text-lg font-medium'>Proofread Carefully</h3>
          <p className='text-muted-foreground'>
            Thoroughly review your CV for any spelling or grammar errors. Having
            a second pair of eyes review your CV can also help identify areas
            for improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

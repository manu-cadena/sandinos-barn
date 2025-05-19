import type { Metadata } from 'next';
import AboutButtons from '@/components/AboutButtons';

export const metadata: Metadata = {
  title: 'About Us - Sandinos Barn',
  description: 'Learn about our 20-year mission in Nicaragua',
};

export default function About() {
  return (
    <div className='min-h-screen p-8'>
      <h1 className='text-4xl font-bold'>About Sandinos Barn</h1>
      <p className='mt-4 text-lg'>This will be our about page!</p>

      <AboutButtons />
    </div>
  );
}

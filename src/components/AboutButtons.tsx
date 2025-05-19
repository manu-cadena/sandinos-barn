'use client';

import Button from './Button';

export default function AboutButtons() {
  return (
    <div className='mt-8 space-x-4'>
      <Button variant='primary' size='lg'>
        Donate Now
      </Button>
      <Button variant='secondary' onClick={() => alert('Contact clicked!')}>
        Contact Us
      </Button>
      <Button variant='destructive' size='sm' disabled>
        Disabled Button
      </Button>
    </div>
  );
}

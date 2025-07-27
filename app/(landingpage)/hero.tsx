import { Badge } from '@/registry/new-york/ui/badge';
import { Button } from '@/registry/new-york/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='pt-32 pb-16 lg:pt-48 lg:pb-32' data-oid='1zrkf9u'>
      <div className='mx-auto w-full max-w-2xl px-6 lg:max-w-7xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='text-muted-foreground inline-flex items-center gap-2 text-sm'>
            <Badge>New</Badge> Introducing Zuno UI
          </div>
          <h1 className='mt-4 text-2xl/tight font-bold tracking-tight text-balance sm:text-4xl/tight lg:text-5xl/tight'>
            Stop Re‑Inventing the Wheel. Start Shipping Faster.
          </h1>
          <p className='text-muted-foreground mx-auto mt-4 max-w-lg text-base/7 text-balance sm:text-lg/8'>
            Access a growing library of reusable, customizable UI components
            built for real-world production needs.
          </p>
          <div className='mt-8 grid gap-3 sm:flex sm:justify-center'>
            <Button size='lg'>Expore Components</Button>
            <Button size='lg' variant={'link'}>
              Documentation <ArrowRight />
            </Button>
          </div>
        </div>
        <div className='mx-auto mt-12 max-w-5xl'>
          <Image
            unoptimized
            className='aspect-[16/9] w-full rounded-xl object-cover object-center shadow-sm'
            src='https://blookie.io/stock/heroes-4-1.webp'
            alt='#'
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

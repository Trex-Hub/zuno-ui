import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/registry/new-york/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/registry/new-york/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: 'Components',
    href: '#',
  },
  {
    title: 'Documentation',
    href: '#',
  },
];

const NavBar = () => {
  return (
    <header>
      <nav className='absolute inset-x-0 top-0 z-50 mx-auto flex h-20 w-full max-w-7xl items-center gap-6 px-6'>
        <Link href='#' className='inline-flex flex-1 items-center gap-1'>
          <Image
            src='/icon.svg'
            alt='Zuno'
            width={24}
            height={24}
            className='dark:invert'
          />

          <span className='text-2xl font-bold tracking-tight'>uno</span>
        </Link>
        <div className='hidden gap-2 lg:inline-flex'>
          {navItems.map((item: NavItem) => (
            <Button key={item.title} asChild variant={'ghost'}>
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </div>
        <div className='hidden flex-1 justify-end gap-2 lg:inline-flex'>
          <ThemeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild className='ml-auto lg:hidden'>
            <Button variant='outline' size='icon' aria-label='Open Menu'>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='flex w-[90%] max-w-sm flex-col px-6 py-6'>
            <SheetTitle>
              <Link href='#' className='inline-flex items-center gap-1'>
                <Image
                  src='/icon.svg'
                  alt='Zuno'
                  width={24}
                  height={24}
                  className='dark:invert'
                />

                <span className='text-2xl font-bold tracking-tight'>uno</span>
              </Link>
            </SheetTitle>
            <nav className='my-6 flex flex-1 flex-col gap-2'>
              {navItems.map((item: NavItem) => (
                <Button
                  key={item.title}
                  asChild
                  className='justify-start text-base'
                  variant={'ghost'}>
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </nav>
            <div className='mt-auto grid gap-2'>
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default NavBar;

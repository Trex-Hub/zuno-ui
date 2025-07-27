import * as React from 'react';
import Hero from '@/app/(landingpage)/hero';
import NavBar from '@/app/(landingpage)/nav-bar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

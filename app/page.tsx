import React from 'react';
import WelcomeBanner from '@/components/sections/welcome-banner';
import About from '@/components/sections/about';
import Featured from '@/components/sections/featured';
import FAQS from '@/components/sections/faqs';
import Cta from '@/components/sections/cta';
const Homepage = () => {
  return (
    <main className='flex flex-col w-screen items-center'>
      <WelcomeBanner />
      <About/>
      <Featured />
      <FAQS/>
      <Cta />
    </main>
  );
};
export default Homepage;

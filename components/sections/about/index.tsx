'use client';
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';
import LeftArrow from '@/public/assets/icons/left-arrow.svg';
import RightArrow from '@/public/assets/icons/right-arrow.svg';
import AboutImage from '@/public/assets/images/about.webp';
import data from '@/dictionaries/en.json';

const About = () => {
  return (
    <section
      className='w-screen bg-cover bg-center flex items-center justify-center px-3 md:px-16 2xl:px-0 h-screen lg:h-[120vh] relative lg:bg-fg-text-contrast' aria-label='About Us Section' id='about'>
      <NextImage src={AboutImage}
        alt='Feature Image'
        className='absolute w-full h-full '
        />
      <div className='w-screen absolute block -inset-1 bg-black bg-opacity-50 max-h-full mt-1 ml-1'></div>

      <div className='flex flex-col w-full max-w-screen-xl items-center gap-9 lg:gap-12 z-10'>
        <div className='flex w-fit gap-3 md:gap-4 lg:gap-6 items-center '>
        <NextImage src={LeftArrow}
        alt='arrow'
        className='max-w-12 md:max-w-16 lg:max-w-32'
        />
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-primary-1100'>
          {data.about.heading}
        </h1>
        <NextImage src={RightArrow}
        alt='arrow'
        className='max-w-12 md:max-w-16 lg:max-w-32'
        />
        </div>
        <p className='text-sm md:text-xl font-medium lg:text-3xl text-boldtext text-center'>{data.about.mainText}</p>
        <a
          href='/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button shape='filled'>{data.about.buttonText}</Button>
        </a>
      </div>
    </section>
  );
};

export default About;

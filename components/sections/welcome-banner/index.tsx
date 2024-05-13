'use client';
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';
import BannerImage from '@/public/assets/images/banner.webp';
import data from '@/dictionaries/en.json';
const WelcomeBanner = () => {
  return (
    <section className='w-full py-9 lg:py-24 px-3 md:px-16 2xl:px-0 flex items-center justify-center min-h-screen' aria-label='Welcome Banner' id='welcome'>
    <div className='flex w-full max-w-screen-xl items-center justify-between gap-9 lg:gap-20  flex-col-reverse md:flex-row'>
        <div className='flex flex-1 flex-col justify-start items-center md:items-start gap-3 lg:gap-9 max-w-[25rem] lg:max-w-[45rem]'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl text-primary-1100 text-center md:text-start '>{data.heroSection.heading}</h1>
            <p className='font-medium text-base md:text-xl lg:text-3xl text-fg-text-contrast text-center md:text-start'>{data.heroSection.subheading}</p>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button shape='filled'>
                {data.heroSection.buttonText}
              </Button>
            </a>
        </div>
        <div className='flex items-center justify-end'>
        <NextImage src={BannerImage}
        alt='banner image'
        className='max-h-[45rem] w-auto lg:min-w-[23rem] 2xl:min-w-[28rem]'
        />
        </div>


    </div>
    </section>
  );
};

export default WelcomeBanner;
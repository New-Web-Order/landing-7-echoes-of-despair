'use client';
import React from 'react';
import FeatureCard from '@/components/ui/feature-card';
import NextImage from 'next/image';
import LeftArrow from '@/public/assets/icons/left-arrow.svg';
import RightArrow from '@/public/assets/icons/right-arrow.svg';
import data from '@/dictionaries/en.json';

const Featured = () => {
  return (
    <section className='w-full flex items-center justify-center py-9 lg:py-16 px-3 sm:px-16 2xl:px-0' aria-label='Featured Section' id='featured'>
      <div className='w-full max-w-screen-xl flex flex-col items-center gap-9 lg:gap-16'>

      <div className='flex w-fit gap-3 md:gap-4 lg:gap-6 items-center '>
        <NextImage src={LeftArrow}
        alt='arrow'
        className='max-w-12 md:max-w-16 lg:max-w-32'
        />
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-primary-1100'>
          {data.featured.heading}
        </h1>
        <NextImage src={RightArrow}
        alt='arrow'
        className='max-w-12 md:max-w-16 lg:max-w-32'
        />
        </div>

      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-items-center gap-4 lg:gap-12 '>
        {data.featured.cardInfo.map((option, index) => (
          <FeatureCard
            key={index}
            image={option.image}
            title={option.title}
            description={option.description}
            buttonText={option.buttonText}

          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Featured;

'use client';
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';

interface FeatureCardProps {

    image: string;
    title: string;
    description: string;
    buttonText: string;


}

const FeatureCard: React.FC<FeatureCardProps> = ({
    image,
    title,
    description,
    buttonText


  }) => {
    return (
      <div className='w-full flex flex-col gap-4 items-center p-8 rounded-3xl border border-primary-border max-w-[26rem] md:max-w-full  '>
      <NextImage 
       src={image}
  alt='card image' 
  width={500} 
  height={500} 
  className='w-full lg:max-w-[23rem] 2xl:max-w-[28rem] rounded-xl'

      />  

        <div className='flex flex-col gap-3 lg:gap-4 w-full lg:max-w-[23rem] 2xl:max-w-[28rem] items-center'>
          <h1 className='font-bold text-xl lg:text-3xl text-fg-text-contrast'>{title}</h1>
          <p className='text-base lg:text-xl font-normal text-fg-text text-center '>{description}</p>
          <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full'
            >
              <Button shape='card'>
                {buttonText}
              </Button>
            </a>
        </div>

      </div>
    );
  };  


export default FeatureCard;
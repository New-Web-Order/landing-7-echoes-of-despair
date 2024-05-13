'use client';
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';
import LeftArrow from '@/public/assets/icons/left-arrow.svg';
import RightArrow from '@/public/assets/icons/right-arrow.svg';
import data from '@/dictionaries/en.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';


const FAQS = () => {
  return (
        <section className='w-full flex justify-center py-16 lg:py-20 px-3 md:px-16 2xl:px-0' aria-label='Faqs Section' id='faq'>
        <div className='w-full max-w-screen-lg flex flex-col items-center gap-y-9 lg:gap-y-16'>
        <div className='flex w-fit gap-3 md:gap-4 lg:gap-6 items-center '>
        <NextImage src={LeftArrow}
        alt='arrow'
        className='max-w-12 md:max-w-16 lg:max-w-32'
        />
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-primary-1100'>
          {data.faq.heading}
        </h1>
        <NextImage src={RightArrow}
        alt='arrow'
        className='max-w-12 md:max-w-16 lg:max-w-32'
        />
        </div>
        <div className='w-full justify-center flex flex-col sm:px-6 xl:px-0'>
          <Accordion type='single' collapsible>
  <AccordionItem value='item-1'>
    <AccordionTrigger className='font-semibold text-base md:text-lg lg:text-xl text-fg-text-contrast text-start flex justify-between w-full gap-x-8 items-start'>{data.faq.questionOne}</AccordionTrigger>
    <AccordionContent className='font-normal text-base md:text-lg text-fg-text-contrast'>
      {data.faq.answerOne}   
    </AccordionContent>
  </AccordionItem>
          </Accordion> 

          <Accordion type='single' collapsible>
  <AccordionItem value='item-1'>
    <AccordionTrigger className='font-semibold text-base md:text-lg lg:text-xl text-fg-text-contrast text-start flex justify-between w-full gap-x-8 items-start'>{data.faq.questionFive}</AccordionTrigger>
    <AccordionContent className='font-normal text-base md:text-lg text-fg-text-contrast'>
      {data.faq.answerFive}   
    </AccordionContent>
  </AccordionItem>
          </Accordion> 

          <Accordion type='single' collapsible>
  <AccordionItem value='item-1'>
    <AccordionTrigger className='font-semibold text-base md:text-lg lg:text-xl text-fg-text-contrast text-start flex justify-between w-full gap-x-8 items-start'>{data.faq.questionTwo}</AccordionTrigger>
    <AccordionContent className='font-normal text-base md:text-lg text-fg-text-contrast'>
      {data.faq.answerTwo}   
    </AccordionContent>
  </AccordionItem>
          </Accordion> 

          <Accordion type='single' collapsible>
  <AccordionItem value='item-1'>
    <AccordionTrigger className='font-semibold text-base md:text-lg lg:text-xl text-fg-text-contrast text-start flex justify-between w-full gap-x-8 items-start'>{data.faq.questionThree}</AccordionTrigger>
    <AccordionContent className='font-normal text-base md:text-lg text-fg-text-contrast'>
      {data.faq.answerThree}   
    </AccordionContent>
  </AccordionItem>
          </Accordion> 

          <Accordion type='single' collapsible className='border-b border-fg-text-contrast'>
  <AccordionItem value='item-1'>
    <AccordionTrigger className='font-semibold text-base md:text-lg lg:text-xl text-fg-text-contrast text-start flex justify-between w-full gap-x-8 items-start'>{data.faq.questionFour}</AccordionTrigger>
    <AccordionContent className='font-normal text-base md:text-lg text-fg-text-contrast'>
    {data.faq.answerFour}   
    </AccordionContent>
  </AccordionItem>
          </Accordion>
          
          </div>
          <div className='w-full flex flex-col items-center gap-4 lg:gap-8'>
          <h1 className='text-2xl lg:text-3xl text-fg-text-contrast font-bold text-center'>{data.faq.endquestion}</h1>
          <p className='text-sm lg:text-lg text-fg-text font-medium text-center'>{data.faq.endtext}</p>
          <a href='/' target='_blank' rel='noopener noreferrer' className='flex items-center w-full justify-center'>
      <Button shape='filled'>
              {data.faq.buttonText}
      </Button>
      </a>

          </div>
        </div>
        </section>
  );
};

export default FAQS;
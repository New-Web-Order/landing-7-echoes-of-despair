'use client';
import React from 'react';
import Link from 'next/link';
import data from '@/dictionaries/en.json';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ThemeToggle from '../next-theme-toggle';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}



const Footer = () => {
  return (
    <div className='w-full flex justify-center px-3.5 lg:px-6 py-9  bg-bg-bg '>
      <div className='w-full max-w-screen-xl flex flex-col  items-center gap-y-7 lg:gap-y-9'>
        <div className='w-full flex-col md:flex-row flex justify-between items-center gap-y-7'>

      <div className='w-fit flex gap-4'>
      {data.navbar.links.map((item) => (
                      <a key={item.name} href={item.href}>
                        <p
                          className={classNames(
                            'text-[15px] font-semibold text-fg-text hover:text-primary-1100 transition duration-300 ease-in-out ',
                          )}
                          aria-current={item.name ? 'page' : undefined}
                        >
                          {item.name}
                        </p>
                      </a>
                    ))}
      </div>
        <p className='hidden md:block text-sm text-fg-text'>Realised by <a href='https://www.newweborder.co/' target='_blank' className='hover:cursor-pointer hover:bg-black/90 py-px rounded-sm hover:text-[#23FA4B] hover:transition-color ease-in-out duration-300 text-fg-text'>◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_</a></p>
        <div className='w-fit h-fit hidden md:flex'>
        <ThemeToggle/>
        </div>

        <div className='w-fit flex items-center gap-3 text-fg-text'>
            {data.footer.SocialMediaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-primary-1100'
                aria-label={`Echoes of Despair on ${link.name}`}

              >
                {/* {link.name === 'facebook' && <FaFacebook aria-hidden='true'/>} */}
                {link.name === 'instagram' && <FaInstagram aria-hidden='true'/>}
                {link.name === 'twitter' && <FaXTwitter aria-hidden='true'/>}
                {link.name === 'youtube' && <FaYoutube aria-hidden='true'/>}  
                {/* {link.name === 'linkedin' && <FaLinkedin aria-hidden='true'/>} */}
              </Link>
            ))}
        </div>
        <p className='block md:hidden text-sm text-fg-text'>Realised by <a href='https://www.newweborder.co/' target='_blank' className='hover:cursor-pointer hover:bg-black/90 py-px rounded-sm hover:text-[#23FA4B] hover:transition-color ease-in-out duration-300 text-fg-text'>◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_</a></p>
        </div>
        <div className='w-fit h-fit flex md:hidden'>
        <ThemeToggle/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
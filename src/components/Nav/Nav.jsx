import React from 'react';

export default function Nav() {
  return (
    <div className='w-screen flex items-center justify-center bg-white font-barlow font-semibold text-lg pb-10 pt-10 md:pb-6 md:pt-6'>
      <div className='w-[420px] md:w-[1066px] flex justify-around md:justify-between flex-wrap gap-y-7 '>
        <a
          className='flex items-center gap-4 max-sm:w-40 hover:animate-bounce'
          href=''
        >
          <img src='/src/assets/nav/1.svg' alt='' />
          <h3>YENİ! Kore</h3>
        </a>
        <a
          className='flex items-center gap-4 max-sm:w-40 hover:animate-bounce'
          href=''
        >
          <img src='/src/assets/nav/2.svg' alt='' />
          <h3>Pizza</h3>
        </a>
        <a
          className='flex items-center gap-4 max-sm:w-40 hover:animate-bounce'
          href=''
        >
          <img src='/src/assets/nav/3.svg' alt='' />
          <h3>Burger</h3>
        </a>
        <a
          className='flex items-center gap-4 max-sm:w-40 hover:animate-bounce'
          href=''
        >
          <img src='/src/assets/nav/4.svg' alt='' />
          <h3>Kızartmalar</h3>
        </a>
        <a
          className='flex items-center gap-4 max-sm:w-40 hover:animate-bounce'
          href=''
        >
          <img src='/src/assets/nav/5.svg' alt='' />
          <h3>Fast food</h3>
        </a>
        <a
          className='flex items-center gap-4 max-sm:w-40 hover:animate-bounce'
          href=''
        >
          <img src='/src/assets/nav/6.svg' alt='' />
          <h3>Gazlı İçecek</h3>
        </a>
      </div>
    </div>
  );
}

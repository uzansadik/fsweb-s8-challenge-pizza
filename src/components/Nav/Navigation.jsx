import React from 'react';

export default function Nav() {
  return (
    <div className='w-screen flex items-center justify-center font-barlow font-semibold text-lg  pb-10 pt-10 md:pb-6 md:pt-6'>
      <div className='w-[420px] md:w-[1066px] flex justify-around md:justify-between flex-wrap gap-y-7 '>
        <a
          className='bg-white flex items-center gap-4 max-sm:w-40  px-5 py-3 rounded-full hover:bg-darkGrey hover:text-white'
          href=''
        >
          <img src='/src/assets/nav/1.svg' alt='' />
          <h3>Ramen</h3>
        </a>
        <a
          className='bg-white flex items-center gap-4 max-sm:w-40  px-5 py-3 rounded-full hover:bg-darkGrey hover:text-white'
          href=''
        >
          <img src='/src/assets/nav/2.svg' alt='' />
          <h3>Pizza</h3>
        </a>
        <a
          className='bg-white flex items-center gap-4 max-sm:w-40  px-5 py-3 rounded-full hover:bg-darkGrey hover:text-white'
          href=''
        >
          <img src='/src/assets/nav/3.svg' alt='' />
          <h3>Burger</h3>
        </a>
        <a
          className='bg-white flex items-center gap-4 max-sm:w-40  px-5 py-3 rounded-full hover:bg-darkGrey hover:text-white'
          href=''
        >
          <img src='/src/assets/nav/4.svg' alt='' />
          <h3>French Fries</h3>
        </a>
        <a
          className='bg-white flex items-center gap-4 max-sm:w-40  px-5 py-3 rounded-full hover:bg-darkGrey hover:text-white'
          href=''
        >
          <img src='/src/assets/nav/5.svg' alt='' />
          <h3>Fast food</h3>
        </a>
        <a
          className='bg-white flex items-center gap-4 max-sm:w-40  px-5 py-3 rounded-full hover:bg-darkGrey hover:text-white'
          href=''
        >
          <img src='/src/assets/nav/6.svg' alt='' />
          <h3>Soft Drinks</h3>
        </a>
      </div>
    </div>
  );
}

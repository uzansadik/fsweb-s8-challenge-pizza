import React from 'react';

export default function OrderFormDescription({ description }) {
  return (
    <p className='max-w-[408px] md:max-w-[532px] text-xl md:text-lg font-barlow tracking-normal leading-7 mt-4 md:mt-5 mb-10'>
      {description}
    </p>
  );
}

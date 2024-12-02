import React from 'react';

export default function OrderFormHeader({ title, price }) {
  return (
    <div className='flex flex-col flex-wrap'>
      <h1 className='text-[27px] md:text-[22px] font-semibold '>{title}</h1>
      <div className='flex flex-row justify-between mt-4 md:mt-[14px]'>
        <h1 className='text-[27px] md:text-[22px] font-bold '>{price} ₺</h1>
        <div className='flex flex-row justify-between items-end'>
          <h5>4.9</h5>
          <h5 className='ml-16'>(200)</h5>
        </div>
      </div>
    </div>
  );
}

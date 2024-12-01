import React from 'react';
import PizzaLogo from './PizzaLogo';

export default function Header() {
  return (
    <div className='min-w-max h-[207px] flex flex-col items-center bg-red'>
      <div className='mt-20'>
        <PizzaLogo />
      </div>
      <div className='min-w-max md:w-[532px] mt-8 flex flex-row font-barlow text-xl md:text-lg text-white md:text-left'>
        <h5>Anasayfa</h5>
        <p className='pl-1'>-</p>
        <h5 className='font-bold pl-1'>Sipariş oluştur</h5>
      </div>
    </div>
  );
}

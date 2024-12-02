import React from 'react';
import PizzaLogo from '../components/PizzaLogo';

export default function OrderCompleted() {
  return (
    <div className='w-screen h-screen bg-red flex flex-col items-center'>
      <div className='mt-40'>
        <PizzaLogo />
      </div>
      <div className='min-w-96 min-h-96 mt-4 font-roboto text-7xl text-white font-light text-center flex flex-col items-center justify-center'>
        <p className=''>TEBRİKLER!</p>
        <p>SİPARİŞİNİZ ALINDI!</p>
      </div>
    </div>
  );
}

import React from 'react';
import bg from '../assets/img/home-banner.png';
import { Buttons } from '@testing-library/user-event/dist/cjs/system/pointer/buttons.js';
import { NavLink } from 'react-router';
import PizzaLogo from '../components/PizzaLogo';

export default function Home({ handlePageChange }) {
  return (
    <div
      className='flex flex-col items-center w-screen h-screen bg-no-repeat bg-bottom-[-150px] bg-bottom  bg-red '
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='mt-16'>
        <PizzaLogo />{' '}
      </div>
      <div className='min-w-[398px min-h-[368] font-roboto font-light text-[96px] leading-[92px] text-center text-white mt-5'>
        <h1>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
      </div>
      <button
        onClick={handlePageChange}
        name='order'
        className='font-barlow  bg-yellow text-white text-lg font-semibold pl-16 pr-16 pt-3.5 pb-3.5 rounded-full mt-5
      '
      >
        ACIKTIM
      </button>
    </div>
  );
}

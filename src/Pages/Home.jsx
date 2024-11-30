import React from 'react';
import bg from '../assets/img/home-banner.png';
import { Buttons } from '@testing-library/user-event/dist/cjs/system/pointer/buttons.js';
import { NavLink } from 'react-router';

export default function Home() {
  return (
    <div
      className='flex flex-col items-center w-screen h-screen bg-no-repeat bg-center m-auto bg-PizzaBg'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img
        className='mt-24'
        src='./src/assets/img/logo.svg'
        alt='Pizza-Challange-Logo'
      />
      <div className='text-white font-roboto font-light text-center text-7xl mt-10 ml-10 mr-10'>
        <h1>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
      </div>
      <NavLink to='/OrderPizza' end>
        <button
          className='font-barlow  bg-yellow tezt-white text-lg font-semibold pl-16 pr-16 pt-3.5 pb-3.5 rounded-full mt-10
      '
        >
          ACIKTIM
        </button>
      </NavLink>
    </div>
  );
}

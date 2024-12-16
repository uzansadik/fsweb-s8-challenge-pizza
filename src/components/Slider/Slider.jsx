import React from 'react';

export default function Slider() {
  return (
    <div className='flex flex-col md:flex-row m-auto w-[422px] mt-12 md:mt-16  md:w-[1072px] gap-3 font-barlow  text-white'>
      <div className='relative'>
        <div className='absolute pl-8 pt-8'>
          <p className='text-7xl max-w-72 font-quattrocento font-bold'>
            Özel Lezzetus
          </p>
          <p className='text-xl'>Position: Absolute Acı Burger</p>
          <button className='w-[138px] h-[48px]  rounded-full bg-white text-red text-sm font-semibold leading-10 mt-6'>
            SİPARİŞ VER
          </button>
        </div>

        <img
          className='rounded-xl '
          src='/src/assets/img/cta/kart-1.png'
          alt=''
        />
      </div>

      <div className='flex flex-col justify-between'>
        <div className='relative '>
          <div className='absolute pl-8 pt-14'>
            <p className='text-3xl max-w-48  font-bold'>
              Hackathlon Burger Menü
            </p>
            <button className='w-[138px] h-[48px]  rounded-full bg-white text-red text-sm font-semibold leading-10 mt-6'>
              SİPARİŞ VER
            </button>
          </div>

          <img
            className='rounded-xl h-[270px] md:h-[220px]'
            src='/src/assets/img/cta/kart-2.png'
            alt=''
          />
        </div>
        <div className='relative'>
          <div className='absolute pl-8 pt-10'>
            <p className='text-3xl max-w-56  font-bold text-darkGrey'>
              <span className='text-red'>Çoooook</span> hızlı npm gibi kurye
            </p>
            <button className='w-[138px] h-[48px]  rounded-full bg-white text-red text-sm font-semibold leading-10 mt-6'>
              SİPARİŞ VER
            </button>
          </div>

          <img
            className='rounded-xl h-[220px] md:h-[220px]'
            src='/src/assets/img/cta/kart-3.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

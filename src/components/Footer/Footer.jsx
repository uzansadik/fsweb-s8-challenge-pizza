import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <footer>
      <div className='flex flex-col items-center md:flex-row md:justify-center w-screen  bg-black mb-0 pt-20 pb-16 font-normal text-lg font-barlow leading-8 text-white'>
        <div className='flex flex-col  md:flex-row gap-12 items-start min-w-96 md:w-[1066px] pl-12 md:pl-0'>
          <div className='flex flex-col gap-5'>
            <h2 className='font-Londrina text-[50px] leading-[50px] max-w-52'>
              Teknolojik Yemekler
            </h2>
            <div className='flex'>
              <LocationOnIcon
                className='text-yellow'
                fontSize='large'
              ></LocationOnIcon>
              <p className='max-w-60'>341 Londonderry Road, İstanbul Türkiye</p>
            </div>
            <div className='flex'>
              <EmailIcon className='text-yellow' fontSize='large'></EmailIcon>
              <p className='max-w-60'>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className='flex'>
              <PermPhoneMsgIcon
                className='text-yellow'
                fontSize='large'
              ></PermPhoneMsgIcon>
              <p className='max-w-60'>+90 216 123 45 67</p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-semibold text-[24px]'>Hot Menu</h2>
            <div className='flex flex-col items-start'>
              <a href='#'>Terminal Pizza</a>
              <a href='#'>5 Kişilik Hackatlon Pizza</a>
              <a href='#'>useEffect Tavuklu Pizza</a>
              <a href='#'>Beyaz Console Frosty</a>
              <a href='#'>Testler Geçti Mutlu Burger</a>
              <a href='#'>Position Absolute Acı Burger</a>
            </div>
          </div>
          <div className='flex flex-col gap-5 md:ml-auto'>
            <div className='flex gap-1 items-center'>
              <InstagramIcon className='text-yellow'></InstagramIcon>
              <h2 className='font-semibold text-[24px]'>Instagram</h2>
            </div>

            <div className='flex flex-row flex-wrap gap-4 items-start max-w-96'>
              <img src='/src/assets/img/footer/li-0.png'></img>
              <img src='/src/assets/img/footer/li-1.png'></img>
              <img src='/src/assets/img/footer/li-2.png'></img>
              <img src='/src/assets/img/footer/li-3.png'></img>
              <img src='/src/assets/img/footer/li-4.png'></img>
              <img src='/src/assets/img/footer/li-5.png'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black border border-lightGrey text-white flex flex-col items-center'>
        <div className='min-w-96 md:w-[1066px] flex flex-row justify-between pt-14 pb-14 md:pb-8 md:pt-8'>
          <h6>© 2024 Teknolojik Yemekler</h6>
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

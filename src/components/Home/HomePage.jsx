import * as React from 'react';
import Footer from '../Footer/Footer';
import Home from '../../Pages/Home';
import Nav from '../Nav/Nav';
import Navigation from '../Nav/Navigation';
import Slider from '../Slider/Slider';

function HomePage() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1 flex flex-col'></div>
      <Home />
      <Nav></Nav>
      <Slider></Slider>
      <div className='flex flex-col items-center justify-center mt-14 md:mt-16'>
        <p className='font-satisfy text-3xl text-red leading-10 font-normal'>
          en çok paketlenen menüler
        </p>
        <p className='font-barlow text-4xl font-semibold leading-[56px] mt-4 md:mt-6 w-[308px] md:w-screen text-center'>
          Acıktıran <span>Kodlara Doyuran</span> Lezzetler
        </p>
      </div>
      <Navigation></Navigation>

      <Footer></Footer>
    </div>
  );
}

export default HomePage;

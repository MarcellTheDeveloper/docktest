import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const HomePage = () => {
  return (
    <div className='mainSection'>
      <div className='menuSection'>
        <MenuIcon className='menuIcon' />
      </div>
      <div className='section1'>
        <div className='section1Left'>
          <p>VÁSÁRLÁSRÓL ÉS KISZÁLLÍTÁSRÓL</p>
          <p>TERMÉKEK LISTÁJA</p>
          <p>SZOLGÁLTATÁSOK</p>
          <p>KAPCSOLAT</p>
        </div>
      </div>
      <div className='section2'>
        <div>
          <p>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</p>
          <p>ADATKEZELÉSI NYILATKOZAT</p>
          <p>IMPRESSZUMK</p>
        </div>
      </div>
      <div className='section3'>
        <p>MORELLA</p>
      </div>
    </div>
  );
};

export default HomePage;

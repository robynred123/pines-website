import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import LogoButton from '../logoButton';

const siteTitle = '<RP />';
const Header = () => {
  return (
    <header>
      <div className='title-container'>
        <h1>
          <Link
            to='/'
            className='link'
          >
            {siteTitle}
          </Link>
        </h1>
      </div>

     <div className='logo-container'>
        <LogoButton
          onClick={"https://linkedin.com/in/robyn-pines-2a813850"}
          icon={"LinkedIn"}
        /> 
        <LogoButton
          onClick={"https://github.com/robynred123"}
          icon={"GitHub"}
        />
     </div>
    </header>
  );
};

export default Header;

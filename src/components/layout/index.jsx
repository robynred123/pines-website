import React from 'react';
import './layout.scss';
import Header from '../header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='content'>
        {children}
      </div>
     {/* <footer>
        <h5>{new Date().getFullYear()} @ Robyn Pines</h5>
  </footer>*/}
    </>
  )
}

export default Layout
import React from 'react';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  return (
   <div className="container">
      <div className="header">
        <div className="header__content container">
            <a className="logo" href="#">
                Colit
            </a>
            <Button title="Связаться с нами" />
        </div>
      </div>
   </div>
  )
}

export default Header;
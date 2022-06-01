import React from 'react';
import './Footer.css';
import Button from '../Button/Button';

import instagramI from '../../assets/instagramI.png';
import facebook from '../../assets/facebook.png';
import telegram from '../../assets/telegram.png';

const Footer = () => {
  return (
    <div className="container">
        
        <div className="footer">
            <Button title="Заказать проект" />
            
            <div className="footer__content">
                <div className="logo">Colit</div>
                <p className="footer__adress">Мирзо-Улугбекский район, улица Асака</p>
                <a><p className="footer__phone">90 920-10-50</p></a>
                <div className="footer__icons">
                    <a>
                        <img src={instagramI} className="footer__icon" />
                    </a>
                    <a>
                        <img src={facebook} className="footer__icon" />
                    </a>
                    <a>
                        <img src={telegram} className="footer__icon" />
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer;
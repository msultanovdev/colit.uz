import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

import intagramLogo from '../../assets/instagram.png';
import logo from '../../assets/logo.png';
import website from '../../assets/website.png';
import ui from '../../assets/ui.png';
import mind from '../../assets/mind.png';
import camera from '../../assets/camera.png';

const Cards = () => {
  return (
    <div className="cards">
        <h1 className="cards__title">- Наши Услуги -</h1>
        <div className="cards__block">
            <Card image={intagramLogo} title="SMM" desctiption="Продвигай свой бизнес через социальные сети!" />
            <Card image={logo} title="Создание лого" desctiption="Выделите свой бизнес профессиональным логотипом" />
            <Card image={website} title="Создание веб-страницы" desctiption="Регистрируйте свой бизнес в сети Интернет!" />
        </div>
        <div className="cards__block">
            <Card image={ui} title="Уникальный дизайн" desctiption="Доверьтесь нашему вкусу, закажите сверхъествественный дизайн" />
            <Card image={camera} title="Фото-мото" desctiption="Рекламные видеоролики, обзоры, фотосъёмка Вашей продукции для рекламы." />
            <Card image={mind} title="Услуга брендинга" desctiption="Брендинг - это создание идей, ценностей и чувств в сознании клиентов, формирования позитивного образа у целевой аудитории" />
        </div>
    </div>
  )
}

export default Cards;
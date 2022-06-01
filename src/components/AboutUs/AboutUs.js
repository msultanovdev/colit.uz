import React from 'react';
import './AboutUs.css';

import collaboration from '../../assets/collaboration.png';
import workers from '../../assets/workers.png';
import setting from '../../assets/setting.png';
import consulting from '../../assets/consulting.png';

const AboutUs = () => {
  return (
    <div className="container">
        <div className="about">

            <h1 className="about__title">Кто мы?</h1>
            <div className="about__block">

                <p className="about__description">
                    Мы занимаемся разработкой сайтов любой сложности под ключ и продвижением в поисковых системах. Полный комплекс услуг по брэндингу и неймингу, реклама Вашего бизнеса в социальных сетях, разработка рекламных роликов, видео и фото - сессии. Опыт работы в каждой сфере не менее 7 лет, за это время мы завершили более 100 проектов, упаковали их в десятки кейсов, несколько из которых приведены ниже. Если Вы планируете развивать свой сайт и сделать это в кратчайшие сроки, обращайтесь в наше рекламное агентство Open Engine. Интересуют цены и дополнительная информация? Заполните заявку, и мы Вам обязательно перезвоним!
                </p>

                <div className="about__images">
                    <div className="about-image__block">
                        <img className="about__image" src={collaboration} />
                        <p className="about-image__title">Команда квалифицированных профессионалов</p>
                    </div>
                    <div className="about-image__block">
                        <img className="about__image" src={workers} />
                        <p className="about-image__title">Сертифицированные специалисты по Google, Яндекс, Bitrix, Word Press</p>
                    </div>
                </div>
                <div className="about__images right">
                    <div className="about-image__block">
                        <img className="about__image" src={setting} />
                        <p className="about-image__title">Отдельная команда для каждого проекта</p>
                    </div>
                    <div className="about-image__block">
                        <img className="about__image" src={consulting} />
                        <p className="about-image__title">Бесплатная консультация по любым вопросам связанных с вашим бизнесом</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AboutUs;
import React from 'react';
import Cards from '../Cards/Cards';
import './Home.css';

const Home = () => {
  return (
    <div>
        <section className="wrapper">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="title">
          <div className="container">
              <h1 className="home__title" >
                Collaboration of IT
              </h1>
              <p className="home__description">
                Создадим сильнейший бренд для вашего бизнеса,<br /> продающий сайт и платформы CRM, ERP
              </p>

              <Cards />
          </div>
        </div>

        </section>
    </div>
  )
}

export default Home;
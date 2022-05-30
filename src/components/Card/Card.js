import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
        <img src="../../../../chess-react/src/assets/white-king.png" />
        <h1 className="card__title">Service</h1>
        <p className="card__description">
            Корпоративный сайт – это сайт компании,<br />
            ее официальное виртуальное представительство в интернете.
        </p>
    </div>
  )
}

export default Card;
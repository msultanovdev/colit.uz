import React from 'react';
import './Card.css';

const Card = ({ image, title, desctiption }) => {
  return (
    <div className="card">
        <img className="card__image" src={image} />
        <h1 className="card__title">{title}</h1>
        <p className="card__description">
            {desctiption}
        </p>
    </div>
  )
}

export default Card;
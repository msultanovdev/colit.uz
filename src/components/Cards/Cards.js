import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

const Cards = () => {
  return (
    <div className="cards">
        <div className="cards__block">
            <Card />
            <Card />
        </div>
        <div className="cards__block">
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Cards;
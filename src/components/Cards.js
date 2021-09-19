import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Small cars (or city cars) are small, light, and cheap vehicles that are designed for urban roads.'
              label='Small cars'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='the SUV is designed to offer you the best of both world when it comes to space, performance and convenience.'
              label='SUV'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Blending in the comfort of a your family car with the height and practicality of an off-road vehicle, the SUV is designed to offer you the best of both world when it comes to space, performance and convenience.'
              label='7 Seater Cars'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Explore our wide range of Vans & Trucks available at Chorley Group - with different sizes, different engines, different specifications'
              label='Vans & Trucks'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='A sedan is a passenger car in a three-box configuration with separate compartments for engine, passenger, and cargo'
              label='Sedan'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

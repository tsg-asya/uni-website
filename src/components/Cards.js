import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>COURSES WE OFFER</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards-1.jpg'
              text='IIT Dwarka Provides Bachelor Of Computer Application Course'
              label='BCA'
              path='/services'
            />

            <CardItem
              src='images/cards-2.jpg'
              text='IIT Dwarka Provides Bachelor Of Vocational Course'
              label='BVOC'
              path='/sign-up'
            />
            <CardItem
              src='images/cards-3.jpg'
              text='IIT Dwarka Provides World Class Skill Center Course'
              label='WCSC'
              path='/products'
            />
          </ul>
        </div>
      </div>
      <h1>OUR FACILITIES</h1>
      <p>Bahelor of vocational and bachelor of computer application and medical of Lab Technician and ITESM</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/library.png'
              text='The membership of the College Library is open for all the bonafide students, teachers and non-teaching staff of the College.'
              label='Top Class Library'
              path='/services'
            />

            <CardItem
              src='images/basketball.png'
              text='We have facility for indoor games such as chess, Table Tennis,and outdoor facilities for football, kabaadi, volleyball, and cricket & basket ball.'
              label='Play Ground'
              path='/sign-up'
            />
            <CardItem
              src='images/cafeteria.png'
              text='The College has a "spacious" canteen. it can accommodate upto 200 users at a time. It aims to provide quality food and beverages at competitive prices.'
              label='Taste and Fun'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
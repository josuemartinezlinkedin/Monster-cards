import React from 'react';
import './card.styles.css';

export const Card = (props) =>(
  <div className='card-container'>
    <img src={`https://robohash.org/${props.goon.id}?set=set2&size=180x180`} alt="good" />
    <h2>{props.goon.name}</h2>
    <p>{props.goon.email}</p>
  </div>
);

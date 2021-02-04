import React from 'react';
import {Card} from '../card/card.component.jsx';
import './card-list.styles.css';

// functional component
// parameter for functional component is props
export const CardList = props => (
  <div className='card-list'>
    {props.goons.map(goon => (
      <Card key={goon.id} goon={goon}/>
    ))}
  </div>
);

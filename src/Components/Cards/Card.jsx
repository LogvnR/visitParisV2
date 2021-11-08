import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div style={props.style} className={`${classes.Card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;

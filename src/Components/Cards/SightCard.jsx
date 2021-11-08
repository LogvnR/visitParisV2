import React from 'react';
import Card from './Card';
import ScrollReveal from './ScrollReveal';

import classes from './SightCard.module.css';

const SightCard = (props) => {
  console.log(props.style);
  console.log(props.Image);
  return (
    <ScrollReveal className={`${classes.SightCard} ${props.className}`}>
      <Card style={props.style} className={classes.SightPicture}>
        <img src={props.Image} alt="" />
      </Card>
      <div className={classes.SightDescription}>
        <h2>{props.Title}</h2>
        <p>{props.Desc}</p>
      </div>
    </ScrollReveal>
  );
};

export default SightCard;

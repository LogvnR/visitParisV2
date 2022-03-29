import React from 'react';

import ScrollReveal from './ScrollReveal';

import classes from './SightCard.module.css';

const SightCard = (props) => {
  console.log(props.style);
  console.log(props.Image);
  return (
    <ScrollReveal className={`${classes.container} ${props.className}`}>
      <img className={classes.picture} src={props.Image} alt="" />
      <div className={classes.description}>
        <p className={classes.title}>{props.Title}</p>
        <p className={classes.desc}>{props.Desc}</p>
      </div>
    </ScrollReveal>
  );
};

export default SightCard;

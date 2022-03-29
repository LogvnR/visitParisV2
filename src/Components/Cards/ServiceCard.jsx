import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollReveal from './ScrollReveal';

import classes from './ServiceCard.module.css';

const ServiceCard = (props) => {
  return (
    <ScrollReveal className={classes.container}>
      <img className={classes.picture} src={props.image} alt="" />
      <div className={classes['icon-container']}>
        <div className={classes.circle}>
          <FontAwesomeIcon className={classes.icon} icon={props.iconOne} />
        </div>
        <div className={classes.divider}></div>
        <div className={classes.circle}>
          <FontAwesomeIcon className={classes.icon} icon={props.iconTwo} />
        </div>
      </div>

      <div className={classes.description}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.desc}>{props.desc}</p>
      </div>
    </ScrollReveal>
  );
};

export default ServiceCard;

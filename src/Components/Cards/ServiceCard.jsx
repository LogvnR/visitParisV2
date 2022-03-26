import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './ServiceCard.module.css';

const ServiceCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <FontAwesomeIcon className={classes.icon} icon={props.iconOne} />
      </div>
      <div className={classes.circle}>
        <FontAwesomeIcon className={classes.icon} icon={props.iconTwo} />
      </div>
      <div className={classes.divider}></div>
      <p className={classes.title}>{props.title}</p>
    </div>
  );
};

export default ServiceCard;

import React from 'react';

import classes from '../Styles/Pricing.module.css';
import ScrollReveal from './Cards/ScrollReveal';

const Pricing = () => {
  return (
    <div className={classes.container}>
      <ScrollReveal className={`${classes.card} ${classes['card-basic']}`}>
        <p className={classes.title}>Base</p>
        <div className={classes.features}>
          <p className={classes.price}>$2,299</p>
          <div className={classes.included}>
            <p>Feature 1</p>
            <p>Feature 2</p>
            <p>Feature 3</p>
          </div>
        </div>
        <button className={`${classes.btn} ${classes['btn-basic']}`}>
          select
        </button>
      </ScrollReveal>
      <ScrollReveal className={`${classes.card} ${classes['card-premium']}`}>
        <p className={classes.title}>premium</p>
        <div className={classes.features}>
          <p className={classes.price}>$3,999</p>
          <div className={`${classes.included} ${classes['included-premium']}`}>
            <p>Feature 1</p>
            <p>Feature 2</p>
            <p>Feature 3</p>
            <p>Feature 4</p>
          </div>
        </div>
        <button className={`${classes.btn} ${classes['btn-premium']}`}>
          select
        </button>
      </ScrollReveal>
      <ScrollReveal className={`${classes.card} ${classes['card-basic']}`}>
        <p className={classes.title}>family plan</p>
        <div className={classes.features}>
          <p className={classes.price}>$2,699</p>
          <div className={classes.included}>
            <p>Feature 1</p>
            <p>Feature 2</p>
            <p>Feature 3</p>
          </div>
        </div>
        <button className={`${classes.btn} ${classes['btn-basic']}`}>
          select
        </button>
      </ScrollReveal>
      <ScrollReveal>
        <p className={classes['price-warning']}>
          all pricing subject to change
        </p>
      </ScrollReveal>
    </div>
  );
};

export default Pricing;

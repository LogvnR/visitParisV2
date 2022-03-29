import React from 'react';

import classes from '../Styles/Pricing.module.css';
import ScrollReveal from './Cards/ScrollReveal';

const Pricing = () => {
  return (
    <div className={classes.container}>
      <ScrollReveal className={`${classes.card} ${classes['card-basic']}`}>
        <p className={classes.title}>Base</p>
        <div>
          <p>features</p>
        </div>
        <button className={`${classes.btn} ${classes['btn-basic']}`}>
          select
        </button>
      </ScrollReveal>
      <ScrollReveal className={`${classes.card} ${classes['card-premium']}`}>
        <p className={classes.title}>premium</p>
        <div>
          <p>features</p>
        </div>
        <button className={`${classes.btn} ${classes['btn-premium']}`}>
          select
        </button>
      </ScrollReveal>
      <ScrollReveal className={`${classes.card} ${classes['card-basic']}`}>
        <p className={classes.title}>family plan</p>
        <div>
          <p>features</p>
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

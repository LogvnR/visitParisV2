import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Card from './Cards/Card';
import ScrollReveal from './Cards/ScrollReveal';
import classes from './JumboTron.module.css';

const JumboTron = () => {
  return (
    <ScrollReveal className={classes.JumboTron}>
      <Card className={classes.JumboTronCard}>
        <div className={classes.TitleContainer}>
          <h1>
            Bonjour<span>.</span>
          </h1>
          <hr />
          <h3>Start your journey to this beautiful country today!</h3>
        </div>
        <div className={classes.CtaContainer}>
          <p>Come Visit Us!</p>
          <button>
            <div className={classes.ButtonContainer}>
              <p>Book Now</p>
              <FontAwesomeIcon className={classes.Arrow} icon={faArrowRight} />
            </div>
          </button>
        </div>
      </Card>
    </ScrollReveal>
  );
};

export default JumboTron;

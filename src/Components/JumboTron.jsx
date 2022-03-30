import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Card from './Cards/Card';
import ScrollReveal from './Cards/ScrollReveal';
import NavBar from './NavBar';
import classes from '../Styles/JumboTron.module.css';

const JumboTron = (props) => {
  return (
    <ScrollReveal className={classes.jumbotron}>
      <Card className={classes['jumbotron-card']}>
        <NavBar
          aboutClick={props.aboutClick}
          sightsClick={props.sightsClick}
          servicesClick={props.servicesClick}
          pricingClick={props.pricingClick}
          bookClick={props.bookClick}
        />
        <div className={classes['title-container']}>
          <h1>
            Bonjour<span>.</span>
          </h1>
          <hr />
          <h3>Start your journey to this beautiful country today!</h3>
        </div>
        <div className={classes['cta-container']}>
          <p>Learn More</p>
          <FontAwesomeIcon className={classes.arrow} icon={faChevronDown} />
        </div>
      </Card>
    </ScrollReveal>
  );
};

export default JumboTron;

import React from 'react';

import {
  faPlane,
  faCar,
  faBed,
  faUtensils,
  faTheaterMasks,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';

import classes from '../Styles/Services.module.css';
import ServiceCard from './Cards/ServiceCard';

const Services = () => {
  return (
    <div className={classes.container}>
      <p className={classes.intro}>We Provide...</p>
      <div className={classes.services}>
        <ServiceCard iconOne={faPlane} iconTwo={faCar} title="Transportation" />
        <ServiceCard
          iconOne={faBed}
          iconTwo={faUtensils}
          title="Lodging & Meals"
        />
        <ServiceCard
          iconOne={faLandmark}
          iconTwo={faTheaterMasks}
          title="Tours & Attractions"
        />
      </div>
    </div>
  );
};

export default Services;

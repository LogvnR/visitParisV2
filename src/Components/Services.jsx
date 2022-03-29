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
import ScrollReveal from './Cards/ScrollReveal';

import Image1 from '../Assets/service1.jpg';
import Image2 from '../Assets/service2.jpg';
import Image3 from '../Assets/service3.jpg';

const Services = () => {
  return (
    <ScrollReveal className={classes.container}>
      <p className={classes.intro}>We Provide...</p>
      <div className={classes.services}>
        <ServiceCard
          image={Image1}
          iconOne={faPlane}
          iconTwo={faCar}
          title="Transportation"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor neque, lacinia eget iaculis id, pulvinar a ipsum. Fusce convallis tempor est, sit amet volutpat nulla egestas sit amet. Ut nec neque tincidunt, tincidunt justo ac, bibendum justo. Suspendisse potenti."
        />
        <ServiceCard
          image={Image2}
          iconOne={faBed}
          iconTwo={faUtensils}
          title="Lodging & Meals"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor neque, lacinia eget iaculis id, pulvinar a ipsum. Fusce convallis tempor est, sit amet volutpat nulla egestas sit amet. Ut nec neque tincidunt, tincidunt justo ac, bibendum justo. Suspendisse potenti."
        />
        <ServiceCard
          image={Image3}
          iconOne={faLandmark}
          iconTwo={faTheaterMasks}
          title="Tours & Attractions"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor neque, lacinia eget iaculis id, pulvinar a ipsum. Fusce convallis tempor est, sit amet volutpat nulla egestas sit amet. Ut nec neque tincidunt, tincidunt justo ac, bibendum justo. Suspendisse potenti."
        />
      </div>
    </ScrollReveal>
  );
};

export default Services;

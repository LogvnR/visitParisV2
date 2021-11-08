import React from 'react';
import SightCard from './Cards/SightCard';

import classes from './Sights.module.css';
import Image1 from '../photos/6.jpg';
import Image2 from '../photos/7.jpg';
import Image3 from '../photos/8.jpg';

// Add variable with Array that hold Object with SightCard Values. Test in seperate file

const Sights = () => {
  return (
    <div className={classes.Sights}>
      <SightCard
        Image={Image1}
        Title="Eiffel Tower"
        Desc=" A global cultural icon of France and one of the most recognisable structures in the world."
        className={classes.SightOne}
      />
      <SightCard
        Image={Image2}
        Title="The Louvre"
        Desc="One of the most-visited museums and a historic monument in Paris. It is the home of many of the most known work of arts, including the Mona Lisa. "
        style={{ backgroundImage: { Image2 } }}
        className={classes.SightTwo}
      />
      <SightCard
        Image={Image3}
        Title="Arc de Triomphe"
        Desc="Honors those who fought and died for France in the French Revolutionary & Napoleonic Wars, with the names of all French victories and generals inscribed on it."
        className={classes.SightThree}
      />
    </div>
  );
};

export default Sights;

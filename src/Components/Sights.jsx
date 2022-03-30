import React from 'react';
import SightCard from './Cards/SightCard';

import classes from '../Styles/Sights.module.css';
import ScrollReveal from './Cards/ScrollReveal';
import Image1 from '../Assets/sights1.jpg';
import Image2 from '../Assets/sights2.jpg';
import Image3 from '../Assets/sights3.jpg';

// Add variable with Array that hold Object with SightCard Values. Test in seperate file

const Sights = () => {
  return (
    <div className={classes.container}>
      <SightCard
        Image={Image1}
        Title="Eiffel Tower"
        Desc=" A global cultural icon of France and one of the most recognisable structures in the world."
        className={classes['sight-one']}
      />
      <SightCard
        Image={Image2}
        Title="The Louvre"
        Desc="One of the most-visited museums and a historic monument in Paris. It is the home of many of the most known work of arts, including the Mona Lisa. "
        style={{ backgroundImage: { Image2 } }}
        className={classes['sight-two']}
      />
      <SightCard
        Image={Image3}
        Title="Arc de Triomphe"
        Desc="Honors those who fought for France in the French Revolutionary & Napoleonic Wars, by naming all French victories and their generals."
        className={classes['sight-three']}
      />
    </div>
  );
};

export default Sights;

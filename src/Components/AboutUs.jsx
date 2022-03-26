import React from 'react';

import classes from '../Styles/AboutUs.module.css';
import Card from './Cards/Card';
import ScrollReveal from './Cards/ScrollReveal';

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <ScrollReveal className={classes.reveal}>
        <Card className={classes.text}>
          <p>
            Beyond the glitter of the Eiffel Tower and the allure of the Mona
            Lisa, there is the city of Paris itself. Its people, its cuisine,
            its vibrant life. At visit<span>Paris</span> we want to connect you
            with Paris’s hidden history, its neighborhoods, its beautiful
            structures and its cheese and wine shops. Take a walk down the
            Champs-Élysées and admire Parisian high fashions. After, explore
            your local guide’s favorite neighborhood shops. With visit
            <span>Paris</span>, go beyond the guidebook and experience the real
            Paris.
          </p>
        </Card>
      </ScrollReveal>
    </div>
  );
};

export default AboutUs;

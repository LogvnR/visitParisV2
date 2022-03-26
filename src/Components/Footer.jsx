import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faGoogle,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import ScrollReveal from './Cards/ScrollReveal';

import classes from '../Styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.container}>
      <ScrollReveal className={classes.footer}>
        <h2 className={classes.title}>
          visit<span>Paris</span>
        </h2>
        <div className={classes['social-container']}>
          <FontAwesomeIcon
            onClick={() => window.open('https://www.instagram.com/')}
            className={classes['social-icon']}
            icon={faInstagram}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://twitter.com/')}
            className={classes['social-icon']}
            icon={faTwitter}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://www.google.com/maps')}
            className={classes['social-icon']}
            icon={faGoogle}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://www.youtube.com/')}
            className={classes['social-icon']}
            icon={faYoutube}
          />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Footer;

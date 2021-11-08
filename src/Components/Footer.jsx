import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faGoogle,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import ScrollReveal from './Cards/ScrollReveal';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <ScrollReveal className={classes.FooterContainer}>
        <h2 className={classes.MainTitle}>
          visit<span>Paris</span>
        </h2>
        <div className={classes.SocialContainer}>
          <FontAwesomeIcon
            onClick={() => window.open('https://www.instagram.com/')}
            className={classes.SocialIcon}
            icon={faInstagram}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://twitter.com/')}
            className={classes.SocialIcon}
            icon={faTwitter}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://www.google.com/maps')}
            className={classes.SocialIcon}
            icon={faGoogle}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://www.youtube.com/')}
            className={classes.SocialIcon}
            icon={faYoutube}
          />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Footer;

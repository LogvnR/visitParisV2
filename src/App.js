import React, { useRef } from 'react';
import ScrollReveal from './Components/Cards/ScrollReveal';
import JumboTron from './Components/JumboTron';

import classes from './App.module.css';
import AboutUs from './Components/AboutUs';
import Sights from './Components/Sights';
import BookNow from './Components/BookNow';
import Footer from './Components/Footer';
import Services from './Components/Services';

function App() {
  const aboutRef = useRef(null);
  const executeAboutScroll = () => aboutRef.current.scrollIntoView();

  const sightsRef = useRef(null);
  const executeSightsScroll = () => sightsRef.current.scrollIntoView();

  const bookRef = useRef(null);
  const executeBookScroll = () => bookRef.current.scrollIntoView();

  return (
    <>
      <JumboTron
        aboutClick={executeAboutScroll}
        sightsClick={executeSightsScroll}
        bookClick={executeBookScroll}
      />
      <ScrollReveal className={classes['text-container']}>
        <h2 ref={aboutRef} className={classes.title}>
          About Us
        </h2>
      </ScrollReveal>
      <AboutUs />
      <ScrollReveal className={classes['text-container']}>
        <h2 ref={sightsRef} className={classes.title}>
          See The Sights
        </h2>
      </ScrollReveal>
      <Sights />
      <ScrollReveal className={classes['text-container']}>
        <h2 ref={sightsRef} className={classes.title}>
          How We Help
        </h2>
      </ScrollReveal>
      <Services />
      <BookNow refProp={bookRef} />
      <Footer />
      <ScrollReveal className={classes.watermark}>
        <p>Website by Logan Ricard</p>
      </ScrollReveal>
    </>
  );
}

export default App;

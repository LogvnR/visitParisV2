import React, { useRef } from 'react';
import ScrollReveal from './Components/Cards/ScrollReveal';
import JumboTron from './Components/JumboTron';

import classes from './App.module.css';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Sights from './Components/Sights';
import BookNow from './Components/BookNow';
import Footer from './Components/Footer';

function App() {
  const aboutRef = useRef(null);
  const executeAboutScroll = () => aboutRef.current.scrollIntoView();

  const sightsRef = useRef(null);
  const executeSightsScroll = () => sightsRef.current.scrollIntoView();

  const bookRef = useRef(null);
  const executeBookScroll = () => bookRef.current.scrollIntoView();

  return (
    <>
      <NavBar
        aboutClick={executeAboutScroll}
        sightsClick={executeSightsScroll}
        bookClick={executeBookScroll}
      />
      <JumboTron bookClick={executeBookScroll} />
      <ScrollReveal className={classes.About}>
        <h2 ref={aboutRef} className={classes.AboutTitle}>
          About Us
        </h2>
      </ScrollReveal>
      <AboutUs />
      <ScrollReveal className={classes.Sights}>
        <h2 ref={sightsRef} className={classes.SightsTitle}>
          See The Sights
        </h2>
      </ScrollReveal>
      <Sights />
      <BookNow refProp={bookRef} />
      <Footer />
      <ScrollReveal className={classes.Watermark}>
        <p>Website by Logan Ricard</p>
      </ScrollReveal>
    </>
  );
}

export default App;

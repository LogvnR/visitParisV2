import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';
import './ScrollReveal.css';

const ScrollReveal = (props) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 200,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={props.style}
      className={`${props.className} container scroll-section`}
      data-testid="section"
    >
      {props.children}
    </section>
  );
};

export default ScrollReveal;

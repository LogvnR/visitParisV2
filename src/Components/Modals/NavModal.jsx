import React from 'react';

import ReactDOM from 'react-dom';

import classes from './NavModal.module.css';

const NavModal = (props) => {
  const aboutClickHandler = () => {
    props.close();
    props.aboutClick();
  };

  const sightsClickHandler = () => {
    props.close();
    props.sightsClick();
  };

  const servicesClickHandler = () => {
    props.close();
    props.servicesClick();
  };

  const bookClickHandler = () => {
    props.close();
    props.bookClick();
  };
  return ReactDOM.createPortal(
    <>
      <div className={classes.modalContainer} onClick={() => props.close()}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
          <section onClick={aboutClickHandler}>
            <h2>About Us</h2>
          </section>
          <section onClick={sightsClickHandler}>
            <h2>See The Sights</h2>
          </section>
          <section onClick={servicesClickHandler}>
            <h2>Services</h2>
          </section>
          <section onClick={bookClickHandler}>
            <h2>Book Now!</h2>
          </section>
        </div>
      </div>
    </>,

    document.getElementById('modal')
  );
};

export default NavModal;

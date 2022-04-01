import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import classes from '../Styles/BookNow.module.css';
import ScrollReveal from './Cards/ScrollReveal';
import Card from './Cards/Card';
import BookModal from './Modals/BookModal';

const BookNow = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fromDate, setFromDate] = useState(false);
  const [toDate, setToDate] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClickBtn = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const fromInputHandler = () => {
    setFromDate(true);
  };

  const toInputHandler = () => {
    setToDate(true);
  };

  useEffect(() => {
    if (fromDate && toDate === true) {
      setIsActive(true);
    }
  }, [fromDate, toDate]);

  return (
    <div ref={props.refProp} className={classes.container}>
      <ScrollReveal className={classes['book-now']}>
        <div className={classes['title-container']}>
          <h2>
            Book
            <br /> Your
            <br /> Trip
          </h2>
        </div>
        <Card className={classes['date-container']}>
          <div className={classes['input-container']}>
            <p>from:</p>
            <input
              className={classes['from-input']}
              type="date"
              placeholder="Start"
              onChange={fromInputHandler}
            />
          </div>

          <div className={classes['input-container']}>
            <p>to:</p>
            <input
              className={classes['from-input']}
              type="date"
              placeholder="End"
              onChange={toInputHandler}
            />
          </div>
          <button
            disabled={!isActive}
            className={
              isActive ? `${classes.btn} ${classes.active}` : classes.btn
            }
            onClick={handleClickBtn}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Card>
      </ScrollReveal>
      <AnimatePresence>
        {modalOpen && <BookModal close={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default BookNow;

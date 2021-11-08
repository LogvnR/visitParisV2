import React, { useState, useEffect } from 'react';

import classes from './BookNow.module.css';
import ScrollReveal from './Cards/ScrollReveal';
import Card from './Cards/Card';
import BookModal from './Modals/BookModal';

const BookNow = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

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

  return (
    <div ref={props.refProp} className={classes.BookNow}>
      <ScrollReveal className={classes.BookNowContainer}>
        <div className={classes.TitleContainer}>
          <h2>
            Book
            <br /> Your
            <br /> Trip
          </h2>
        </div>
        <Card className={classes.DateContainer}>
          <input
            className={classes.FromInput}
            type="date"
            placeholder="Start"
          />
          <input className={classes.ToInput} type="date" />
          <button className={classes.SubmitBtn} onClick={handleClickBtn}>
            Search
          </button>
        </Card>
      </ScrollReveal>
      {modalOpen && <BookModal close={closeModal} />}
    </div>
  );
};

export default BookNow;

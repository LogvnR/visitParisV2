import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import ReactDOM from 'react-dom';

import classes from './BookModal.module.css';

const BookModal = (props) => {
  return ReactDOM.createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.container}
        onClick={() => props.close()}
      >
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.1,
            type: 'spring',
            damping: 18,
            stiffness: 600,
          }}
          className={classes.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <header className={classes['modal_header']}>
            <h2>Desole!</h2>
          </header>

          <div className={classes['modal_content']}>
            <main>
              {' '}
              We're Sorry, but that feature is not available right now, please
              try again later.{' '}
            </main>
          </div>

          <footer className={classes.Footer}>
            <button
              className={classes['modal-close']}
              onClick={() => props.close()}
            >
              Cancel
            </button>
          </footer>
        </motion.div>
      </motion.div>
    </>,

    document.getElementById('modal')
  );
};

export default BookModal;

import React from 'react';

import ReactDOM from 'react-dom';

import classes from './BookModal.module.css';

const BookModal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={classes.container} onClick={() => props.close()}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
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
        </div>
      </div>
    </>,

    document.getElementById('modal')
  );
};

export default BookModal;

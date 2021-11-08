import React, { useState, useEffect } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

import NavModal from './Modals/NavModal';
import classes from './NavBar.module.css';

const NavBar = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickBtn = () => {
    if (modalOpen === false) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');

    body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={classes.NavBar}
      style={{ backgroundColor: modalOpen ? '#529277' : '#f0f7f4' }}
    >
      <h2
        className={classes.MainTitle}
        style={{ color: modalOpen ? '#f0f7f4' : '#504746' }}
      >
        visit<span>Paris</span>
      </h2>
      <div className={classes.Hamburger}>
        <Hamburger
          toggled={modalOpen}
          onToggle={handleClickBtn}
          size={30}
          rounded
          color={modalOpen ? '#f0f7f4' : '#504746'}
          hideOutline={true}
        />

        {modalOpen && (
          <NavModal
            aboutClick={props.aboutClick}
            sightsClick={props.sightsClick}
            bookClick={props.bookClick}
            close={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;

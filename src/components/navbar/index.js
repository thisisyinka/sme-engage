import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';
import Button from '../button';
import './style.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState(true);

  const handleNavToggle = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/sme-engage" className="navbar-logo" onClick={closeMobileMenu}>
              <MdChat className="navbar-icon" />
              SME ENGAGE
            </Link>
            <div className="menu-icon" onClick={handleNavToggle}>
              {open ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/sme-engage" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sme-engage/sign-up" className="btn-Link">
                    <Button buttonStyle="btn--outline">SIGN UP/ LOGIN</Button>
                  </Link>
                ) : (
                  <Link to="/sme-engage/sign-up" className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP / LOGIN
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

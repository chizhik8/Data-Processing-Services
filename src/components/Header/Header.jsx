import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';
// import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';

export class Header extends Component {
  render() {
    const pages = ['About', 'Gallery', 'Pricing', 'FAQ', 'Benefits'];
    const pageLink = pages.map((page, i) => (
      <li className={styles.menuLink} key={page + i}>
        {page}
      </li>
    ));
    return (
      <div className={styles.container}>
        <ReactSVG src={logo} className={styles.logo} />
        <nav>
          <ul className={styles.menu}>{pageLink}</ul>
        </nav>
        <div className={styles.auth}>
          <button type="button" className={styles.authSingIn}>
            Sign In
          </button>
          <button type="button" className={styles.authSingUp}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Header;

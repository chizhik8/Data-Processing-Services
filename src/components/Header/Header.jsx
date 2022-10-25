import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';
import Button from '../Button/Button';

import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';
import db from '../../assets/data';

const menuRender = db.menu.map((page, i) => (
    <li className={styles.menuLink} key={page + i}>
      {page}
    </li>
  ));

export class Header extends Component {
  render () {
    return (
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ReactSVG src={logo} className={styles.logo} />
          <nav><ul className={styles.menu}>{menuRender}</ul></nav>
        </nav>
        <div className={styles.auth}>
          <Button text='Sign In' variant='singIn'/>
          <Button text='Sign In' variant='singUp'/>
        </div>
      </div>
    );
  }
}

export default Header;

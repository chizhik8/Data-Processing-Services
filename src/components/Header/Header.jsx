import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';
import db from '../../assets/data';

const menuRender = db.menu.map((item) => (
  <li className={styles.menuLink} key={item.id}>
    <NavLink
      to={item.link}
      className={styles.navLink}
      style={isActive => ({ color: isActive ? "#f2994a" : "#b5b5b5" })}
    >
      {item.pageName}
    </NavLink>
    </li>
  ));

export class Header extends Component {
  render () {
    return (
      <header className={styles.container}>
        <nav className={styles.navigation}>
          <NavLink to="/"><ReactSVG src={logo} className={styles.logo} /></NavLink>
          <nav><ul className={styles.menu}>{menuRender}</ul></nav>
        </nav>
        <div className={styles.auth}>
          <Button text='Sign In' variant='singIn'/>
          <Button text='Sign Up' variant='singUp'/>
        </div>
      </header>
    );
  }
}

export default Header;

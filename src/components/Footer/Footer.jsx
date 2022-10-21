import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Footer.module.scss';
import db from '../../assets/data';

import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import google from '../../assets/icons/google.svg';
import logo from '../../assets/icons/logo.svg';


export class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contacts}>
        <nav className={styles.company}>
          <ReactSVG  src={logo}/>
          <h2 className={styles.title}>{db.footer.title}</h2>
        </nav>
        <nav className={styles.social} >
          <ReactSVG  src={facebook} className={styles.socialIcon}/>
          <ReactSVG src={twitter}  className={styles.socialIcon}/>
          <ReactSVG src={google}  className={styles.socialIcon}/>
        </nav>
        </div>
        <ul className={styles.menu}>
          {db.footer.menu.map(({id, title, submenu}) => 
          <li key={id}>
            <h3 className={styles.menuTitle}>{title}</h3>
            <ul>{submenu.map(({id, title}) => <li key={id} className={styles.subMenuTitle}>{title}</li>)}</ul>
          </li>)}
        </ul>
        <p  className={styles.copy}>© Copyrights 2021</p>
      </div>
    );
  }
}

export default Footer;
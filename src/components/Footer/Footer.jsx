import React, { Component } from 'react';
import Clock from '../Clock/Clock';

import styles from './Footer.module.scss';

export class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Footer</h1>
        <Clock />
      </div>
    );
  }
}

export default Footer;

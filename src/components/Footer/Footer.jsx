import React, { Component } from 'react';

import styles from './Footer.module.scss';

export class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from 'react';

import styles from './Main.module.scss';

import Hero from './Hero';
import Features from './Features';

export class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Hero />
        <Features />
      </div>
    );
  }
}

export default Main;

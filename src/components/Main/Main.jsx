import React, { Component } from 'react';

import styles from './Main.module.scss';

import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Traffic from '../Traffic/Traffic';
import Features3rd from './Features3rd';
import Features4th from './Features4th';
import Features5th from './Features5th';

export class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Hero />
        <Features />
        <Traffic />
        <Features3rd />
        <Features4th />
        <Features5th />
      </div>
    );
  }
}

export default Main;

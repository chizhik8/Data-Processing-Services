import React, { Component } from 'react';

import styles from './Main.module.scss';

import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Features2nd from './Features2nd';
import Features3rd from './Features3rd';
import Features4th from './Features4th';
import Features5th from './Features5th';
// import Features6th from './Features6th';

export class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Hero />
        <Features />
        <Features2nd />
        <Features3rd />
        <Features4th />
        <Features5th />
        {/* <Features6th /> */}
      </div>
    );
  }
}

export default Main;

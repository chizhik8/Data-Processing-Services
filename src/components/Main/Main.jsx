import React, { Component } from 'react';

import styles from './Main.module.scss';

import Hero from './Hero';
import Features1st from './Features1st';
import Features2nd from './Features2nd';
import Features3rd from './Features3rd';

export class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Hero />
        <Features1st />
        <Features2nd />
        <Features3rd />
      </div>
    );
  }
}

export default Main;

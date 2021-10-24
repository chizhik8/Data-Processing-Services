import React, { Component } from 'react';

import styles from './Main.module.scss';

export class Features6th extends Component {
  render() {
    return (
      <section className={styles.features6th}>
        <div className={styles.features6thContext}>
          <h2 className={styles.features6thTitle}>
            There are many reasons to get down
          </h2>
          <p className={styles.features6thText}>
            There are many reasons to get down and start to get <br /> depressed
            about your situation
          </p>
        </div>
      </section>
    );
  }
}

export default Features6th;

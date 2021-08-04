import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Main.module.scss';
import frame from '../../assets/images/frame.svg';

export class Features4th extends Component {
  render() {
    return (
      <section className={styles.features4th}>
        <div className={styles.features4thContent}>
          <h2 className={styles.features4thTitle}>
            Create your <span style={{ color: '#f2994a' }}>next project</span>{' '}
            with startup <br /> framework
          </h2>
          <button type="button" className={styles.features4thBtn}>
            Get Started
          </button>
        </div>
        <ReactSVG src={frame} />
      </section>
    );
  }
}

export default Features4th;

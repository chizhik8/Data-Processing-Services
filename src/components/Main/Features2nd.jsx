import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Main.module.scss';
import img from '../../assets/images/img.svg';
import rainside from '../../assets/images/rainside.svg';

export class Features2nd extends Component {
  render() {
    return (
      <section className={styles.features2nd}>
        <ReactSVG src={rainside} className={styles.features2ndRain} />
        <div className={styles.features2ndContext}>
          <h2 className={styles.features2ndTitle}>
            Increase your business{' '}
            <span style={{ color: '#f2994a' }}>traffic</span>
          </h2>
          <p className={styles.features2ndText}>
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>
          <button type="button" className={styles.features2ndBtn}>
            Learn More
          </button>
        </div>
        <ReactSVG src={img} className={styles.features2ndImg} />
      </section>
    );
  }
}

export default Features2nd;

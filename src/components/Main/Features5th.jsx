import React, { Component } from 'react';
import { Img } from 'react-image';

import styles from './Main.module.scss';
import deal from '../../assets/images/group.png';

export class Features5th extends Component {
  render() {
    return (
      <section className={styles.features5th}>
        <Img src={deal} className={styles.features5thImg} />
        <div className={styles.features5thContext}>
          <h2 className={styles.features5thTitle}>
            Help Finding Information Online
          </h2>
          <p className={styles.features5thText}>
            Fully customizable and neatly organized components <br /> will help
            you work faster without limiting creative freedom.
          </p>
          <ul className={styles.features5thList}>
            <li className={styles.features5thItem}></li>
            <li className={styles.features5thItem}></li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Features5th;

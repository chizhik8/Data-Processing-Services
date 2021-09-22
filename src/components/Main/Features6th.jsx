import React, { Component } from 'react';
import { Img } from 'react-image';
import { ReactSVG } from 'react-svg';

import styles from './Main.module.scss';
import deal from '../../assets/images/group.png';
import lte from '../../assets/icons/icon7.svg';
import knife from '../../assets/icons/icon8.svg';

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
            <li className={styles.features5thItem}>
              <ReactSVG src={knife} />
              <h3 className={styles.features5thItemTitle}>Feature One</h3>
              <p className={styles.features5thItemText}>
                Fully customizable and neatly <br /> organized components will
                <br /> help you work faster
              </p>
            </li>
            <li className={styles.features5thItem}>
              <ReactSVG src={lte} />
              <h3 className={styles.features5thItemTitle}>Feature Two</h3>
              <p className={styles.features5thItemText}>
                Fully customizable and neatly <br /> organized components will
                <br /> help you work faster
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Features5th;

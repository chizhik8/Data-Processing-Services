import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Main.module.scss';
import info from '../../assets/images/info.svg';
import bitmap from '../../assets/images/bitmap.svg';

export class Features5th extends Component {
  render() {
    return (
      <section className={styles.features5th}>
        {/* <ReactSVG src={info} /> */}
        {/* <ReactSVG src={bitmap} /> */}
      </section>
    );
  }
}

export default Features5th;

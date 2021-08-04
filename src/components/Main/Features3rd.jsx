import React, { Component } from 'react';

import styles from './Main.module.scss';

export class Features3rd extends Component {
  render() {
    return (
      <section className={styles.features3nd}>
        <h2 className={styles.features3ndTitle}>
          3 Simple Ways To Save A Bunch <br />
          Of Money When Buying A New Computer
        </h2>
        <p className={styles.features3ndText}>
          Fully customizable and neatly organized components <br />
          will help you work faster without limiting creative freedom.
        </p>
        <ul className={styles.features3ndList}>
          <li className={styles.features3ndItem}>
            <h3 className={styles.features3ndItemTitle}>100+</h3>
            <p className={styles.features3ndItemText}>
              5 Reasons To Purchase <br /> Desktop Computers
            </p>
          </li>
          <li className={styles.features3ndItem}>
            <h3 className={styles.features3ndItemTitle}>43,000+</h3>
            <p className={styles.features3ndItemText}>
              3 Simple Ways To Save A Bunch Of <br />
              Money When Buying A New Computer
            </p>
          </li>
          <li className={styles.features3ndItem}>
            <h3 className={styles.features3ndItemTitle}>30+</h3>
            <p className={styles.features3ndItemText}>
              A Discount Toner Cartridge <br />
              Is Better Than Ever And You <br />
              Will Save 50 Or More
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Features3rd;

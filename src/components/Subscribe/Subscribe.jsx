import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Subscribe.module.scss';
import rain from '../../assets/images/rain.svg';

function Subscribe({title, text}) {
  return (
    <section className={styles.container}>
      <ReactSVG src={rain} className={styles.imgRain} />
      <div className={styles.context}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  )
}

export default Subscribe;
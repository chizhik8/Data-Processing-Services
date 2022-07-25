import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Subscribe.module.scss';
import rain from '../../assets/images/rain.svg';

function Subscribe({title, text, sign}) {
  return (
    <section className={styles.container}>
      <ReactSVG src={rain} className={styles.imgRain} />
      <div className={styles.context}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <form className={styles.form}>
          <input type="email" className={styles.email} placeholder='Your Email'/>
          <input type="submit" value="Send" className={styles.submit}></input>
        </form>
        <p className={styles.sign}>{sign}</p>
      </div>
    </section>
  )
}

export default Subscribe;
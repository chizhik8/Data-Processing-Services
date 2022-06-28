import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Traffic.module.scss';

import Button from '../Button/Button'
import img from '../../assets/images/img.svg';
import rainside from '../../assets/images/rainside.svg';

function Traffic() {
  return (
    <section className={styles.container}>
        <ReactSVG src={rainside} className={styles.imgRain} />
        <div className={styles.content}>
            <h2 className={styles.title}>Increase your business{' '}<span style={{ color: '#f2994a' }}>traffic</span></h2>
            <p className={styles.text}>We are committed to processing the information in order to contact you and talk about your project.</p>
            <Button text={'Learn More'} variant={'full'} />
        </div>
        <ReactSVG src={img} className={styles.img} />
    </section>
  )
}

export default Traffic;
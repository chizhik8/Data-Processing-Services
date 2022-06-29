import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Content.module.scss';

import Button from '../Button/Button'
import rainside from '../../assets/images/rainside.svg';

function Content({title, titleLW, text, image}) {
  return (
    <section className={styles.container}>
        <ReactSVG src={rainside} className={styles.imgRain} />
        <div className={styles.content}>
            <h2 className={styles.title}>{title}{' '}<span>{titleLW}</span></h2>
            <p className={styles.text}>{text}</p>
            <Button text={'Learn More'} variant={'full'} />
        </div>
        <ReactSVG src={image} className={styles.img} />
    </section>
  )
}

export default Content;
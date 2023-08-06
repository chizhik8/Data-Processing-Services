import React from 'react';

import styles from '../Hero/Hero.module.scss';
import data from '../../assets/data'

function FAQTitle() {
    const {faq} = data;
  return (
    <div>
        <h1 className={styles.title}>{faq.title}</h1>
        <p className={styles.text}>{faq.description}</p>
    </div>
  )
}

export default FAQTitle;
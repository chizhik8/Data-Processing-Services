import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Advices.module.scss';

import AdviceItem from '../AdviceItem/AdviceItem';
import rainside from '../../assets/images/rainside.svg';

function Advices({text, items}) {
  return (
    <section className={styles.container}>
      <ReactSVG src={rainside} className={styles.imgRain} />
        <h2 className={styles.title}>3 Simple Ways To <span>Save</span> A Bunch <br /> Of <span>Money</span> When Buying A New Computer</h2>
        <p className={styles.text}>{text}</p>
        <ul className={styles.list}>{items.map(item => <AdviceItem key={item.id} title={item.title} text={item.text}/>)}</ul>
    </section>
  )
}

export default Advices;
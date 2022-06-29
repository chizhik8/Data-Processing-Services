import React from 'react';
import { Img } from 'react-image';

import DetailItem from '../DetailItem/DetailItem';

import styles from './Details.module.scss';
import deal from '../../assets/images/group.png';


function Details({title, text, items}) {
  return (
    <section className={styles.container}>
        <Img src={deal} className={styles.img} />
        <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <ul className={styles.list}>{items.map(item => <DetailItem key={item.id} image={item.img} title={item.title} text={item.text}/>)}</ul>
        </div>
    </section>
  )
}

export default Details;
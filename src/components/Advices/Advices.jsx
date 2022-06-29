import React from 'react'

import styles from './Advices.module.scss'

import AdviceItem from '../AdviceItem/AdviceItem'

function Advices({text, items}) {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>3 Simple Ways To <span>Save</span> A Bunch <br /> Of <span>Money</span> When Buying A New Computer</h2>
        <p className={styles.text}>{text}</p>
        <ul className={styles.list}>{items.map(item => <AdviceItem key={item.id} title={item.title} text={item.text}/>)}</ul>
    </section>
  )
}

export default Advices;
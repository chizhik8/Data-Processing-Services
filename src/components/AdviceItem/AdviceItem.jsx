import React from 'react'

import styles from './AdviceItem.module.scss'

function AdviceItem({title, text}) {
  return (
    <li className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
    </li>
  )
}

export default AdviceItem
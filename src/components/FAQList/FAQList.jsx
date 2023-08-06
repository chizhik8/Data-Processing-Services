import React from 'react';

import styles from './FAQList.module.scss';
import data from '../../assets/data'

function FAQList({ queryData }) {
  const questions = queryData && Object.values(queryData);
  const { subtitle } = data.faq;

  return (
    <div className={styles.container}>
          {questions && <ul className={styles.list}>
              {questions.map(item =>
                <li className={styles.item} key={item.userEmail}>
                    <div className={styles.content} >
                        <h3 className={styles.title}>{item.userQuery}</h3>
                        <p className={styles.text}>{item.answer}</p>
                    </div>
                </li>)
              }
      </ul>}
      <h2 className={styles.subtitle} >{subtitle}</h2>
    </div>
  )
}

export default FAQList;
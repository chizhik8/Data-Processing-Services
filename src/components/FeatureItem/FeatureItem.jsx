import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './FeatureItem.module.scss';


function FeatureItem({ icon, title, text }) {
  return (
    <li className={styles.container} >
      {icon && <ReactSVG src={icon} />}
        <div className={styles.content} >
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    </li>
  )
}

export default FeatureItem;
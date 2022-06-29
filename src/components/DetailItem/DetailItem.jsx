import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from './DetailItem.module.scss';

function DetailItem({image, title, text}) {
  return (
    <li>
        <ReactSVG src={image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
    </li>
  )
}

export default DetailItem;
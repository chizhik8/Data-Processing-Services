import React from 'react'

import styles from './Button.module.scss';

function Button({text, variant}) {
  return (
    <><button type="button" className={styles.container} data-variant={variant}>{text}</button></>
  )
}

export default Button;
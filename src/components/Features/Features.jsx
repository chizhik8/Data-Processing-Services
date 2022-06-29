import React, { Component } from 'react'
import { ReactSVG } from 'react-svg';

import styles from './Features.module.scss';

import FeatureItem from '../FeatureItem/FeatureItem';
import rainleft from '../../assets/images/rainleft.svg';
import rainright from '../../assets/images/rainright.svg';

export class Features extends Component {
  render() {
        return (
        <section className={styles.container}>
          <ReactSVG src={rainleft} />
          <div className={styles.content}>
            <h2 className={styles.title}>Your choice</h2>
            <p className={styles.text}>There are many reasons to get down and start to get depressed about your situation.</p>
            <ul className={styles.list}>{this.props.features.map(item => <FeatureItem key={item.id} icon={item.icon} title={item.title} text={item.text} />)}</ul>
          </div>
          <ReactSVG src={rainright} />
        </section>
        )
    }
}

export default Features;
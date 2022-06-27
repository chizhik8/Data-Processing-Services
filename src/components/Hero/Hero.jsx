import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import Button from '../Button/Button';

import styles from './Hero.module.scss';
import manImg from '../../assets/images/man.svg';
import videoIcon from '../../assets/images/video.svg';

export class Hero extends Component {
    render() {
        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                    Many reasons to get up and start to get back in the business.
                    </h1>
                    <p className={styles.text}>
                      The harder you work for something, the greater you’ll <br /> feel when you achieve it.
                    </p>
                    <div className={styles.bttn}>
                        <Button text={'Learn More'} variant={'full'}/>
                        <Button text={'Demo'} variant={'unfull'}/>
                    </div>
                     <div className={styles.video}>
                        <ReactSVG src={videoIcon} />
                        <p className={styles.videoText}>
                          The harder you work for something, the greater you’ll feel when you achieve it.<br/>Watch preview
                        </p>
                    </div>
                </div>
                <ReactSVG src={manImg} />
            </section>
        )
    }
}

export default Hero

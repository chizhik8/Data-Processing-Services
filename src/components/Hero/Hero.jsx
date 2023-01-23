import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import Button from '../Button/Button';

import styles from './Hero.module.scss';
import manImg from '../../assets/images/man.svg';
import videoIcon from '../../assets/images/video.svg';

export class Hero extends Component {
    render() {
        const {text, title} = this.props
        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>{text}</p>
                    <div className={styles.bttn}>
                        <Button text={'Learn More'} variant={'full'}/>
                        <Button text={'Demo'} variant={'unfull'}/>
                    </div>
                     <div className={styles.video}>
                        <ReactSVG src={videoIcon} />
                        <p className={styles.videoText}>{text} <br/> Watch preview</p>
                    </div>
                </div>
                <ReactSVG src={manImg} className={styles.image} />
            </section>
        )
    }
}

export default Hero

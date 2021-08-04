import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './Main.module.scss';
import man from '../../assets/images/man.svg';
import video from '../../assets/images/video.svg';

export class Hero extends Component {
    render() {
        return (
            <section className={styles.hero}>
                <div className={styles.heroContext}>
                    <h1 className={styles.heroContextTitle}>
                    Many reasons to get up and start to get back in the business.
                    </h1>
                    <p className={styles.heroContextText}>
                    The harder you work for something, the greater you’ll feel when
                    you achieve it.
                    </p>
                    <div className={styles.heroContextBtn}>
                        <button type="button" className={styles.heroContextBtnLearn}>
                            Learn More
                        </button>
                        <button type="button" className={styles.heroContextBtnDemo}>
                            Demo
                        </button>
                    </div>
                     <div className={styles.heroContextVideo}>
                        <ReactSVG src={video} />
                        <p className={styles.heroContextVideoText}>
                            The harder you work for something, the greater you’ll feel when
                            you achieve it.
                            <br />
                            Watch preview
                        </p>
                    </div>
                </div>
                <ReactSVG src={man} className={styles.heroImg} />
            </section>
        )
    }
}

export default Hero

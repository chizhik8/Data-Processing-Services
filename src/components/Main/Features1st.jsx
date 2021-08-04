import React, { Component } from 'react'
import { ReactSVG } from 'react-svg';

import styles from './Main.module.scss';
import rainleft from '../../assets/images/rainleft.svg';
import rainright from '../../assets/images/rainright.svg';
import icon1 from '../../assets/icons/icon1.svg';
import icon2 from '../../assets/icons/icon2.svg';
import icon3 from '../../assets/icons/icon3.svg';
import icon4 from '../../assets/icons/icon4.svg';
import icon5 from '../../assets/icons/icon5.svg';
import icon6 from '../../assets/icons/icon6.svg';

export class Features1st extends Component {
    render() {
        return (
              <section className={styles.features}>
          <ReactSVG src={rainleft} />
          <div className={styles.featuresContext}>
            <h2 className={styles.featuresContextTitle}>Your choice</h2>
            <p className={styles.featuresContextText}>
              There are many reasons to get down and start to get depressed
              about your situation.
            </p>
            <ul className={styles.featuresContextList}>
              <li className={styles.featuresContextListItem}>
                <ReactSVG src={icon1} />
                <div className={styles.featuresContextListItemBlock}>
                  <h3 className={styles.featuresContextListItemTitle}>
                    Ecstatic elegance
                  </h3>
                  <p className={styles.featuresContextListItemText}>
                    Article nor prepare chicken you him now. Shy merits say
                    advice ten before lovers innate add.
                  </p>
                </div>
              </li>
              <li className={styles.featuresContextListItem}>
                <ReactSVG src={icon2} />
                <div className={styles.featuresContextListItemBlock}>
                  <h3 className={styles.featuresContextListItemTitle}>
                    Folly words widow
                  </h3>
                  <p className={styles.featuresContextListItemText}>
                    Effect if in up no depend seemed. Ecstatic elegance gay but
                    disposed. We me rent been part what.
                  </p>
                </div>
              </li>
              <li className={styles.featuresContextListItem}>
                <ReactSVG src={icon3} />
                <div className={styles.featuresContextListItemBlock}>
                  <h3 className={styles.featuresContextListItemTitle}>
                    Possible procured trifling
                  </h3>
                  <p className={styles.featuresContextListItemText}>
                    We me rent been part what. An concluded sportsman offending
                    so provision mr education.
                  </p>
                </div>
              </li>
            </ul>
            <ul className={styles.featuresContextList}>
              <li className={styles.featuresContextListItem}>
                <ReactSVG src={icon4} />
                <div className={styles.featuresContextListItemBlock}>
                  <h3 className={styles.featuresContextListItemTitle}>
                    Open game
                  </h3>
                  <p className={styles.featuresContextListItemText}>
                    Shy merits say advice ten before lovers innate add. She
                    cordially behaviour can attempted estimable.
                  </p>
                </div>
              </li>
              <li className={styles.featuresContextListItem}>
                <ReactSVG src={icon5} />
                <div className={styles.featuresContextListItemBlock}>
                  <h3 className={styles.featuresContextListItemTitle}>
                    Endeavor
                  </h3>
                  <p className={styles.featuresContextListItemText}>
                    Improve ashamed married expense bed her comfort pursuit mrs.
                    Four time took ye your as fail lady.
                  </p>
                </div>
              </li>
              <li className={styles.featuresContextListItem}>
                <ReactSVG src={icon6} />
                <div className={styles.featuresContextListItemBlock}>
                  <h3 className={styles.featuresContextListItemTitle}>
                    Comfort pursuit
                  </h3>
                  <p className={styles.featuresContextListItemText}>
                    Had denoting properly jointure you occasion directly
                    raillery. In said to of poor full be post face snug.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <ReactSVG src={rainright} />
        </section>
      
        )
    }
}

export default Features1st

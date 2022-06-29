import React, { Component } from 'react';

import styles from './Main.module.scss';
import data from '../../assets/dataMain'

import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Content from '../Content/Content';
import Features3rd from './Features3rd';
import Features4th from './Features4th';
import Features5th from './Features5th';

export class Main extends Component {
  render() {
    const {hero, features, traffic} = data;
    return (
      <div className={styles.container}>
        <Hero title={hero.title} text={hero.text}/>
        <Features features={features}/>
        <Content title={traffic.title} titleLW={traffic.titleLstWrd} text={traffic.text} image={traffic.img}/>
        <Features3rd />
        <Features4th />
        <Features5th />
      </div>
    );
  }
}

export default Main;

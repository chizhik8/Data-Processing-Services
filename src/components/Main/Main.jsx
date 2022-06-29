import React, { Component } from 'react';

import styles from './Main.module.scss';
import data from '../../assets/dataMain'

import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Content from '../Content/Content';
import Advices from '../Advices/Advices';
import { CreateProject } from '../CreateProject/CreateProject';
import Details from '../Details/Details';
import Subscribe from '../Subscribe/Subscribe';


export class Main extends Component {
  render() {
    const {hero, features, traffic, advices, invest, details, subscribe} = data;
    console.log()
    return (
      <div className={styles.container}>
        <Hero title={hero.title} text={hero.text}/>
        <Features features={features}/>
        <Content title={traffic.title} titleLW={traffic.titleLstWrd} text={traffic.text} image={traffic.img}/>
        <Advices text={advices.text} items={advices.items}/>
        <CreateProject />
        <Content title={invest.title} titleLW={invest.titleLstWrd} text={invest.text} image={invest.img}/>
        <Details title={details.title} text={details.text} items={details.items}/>
        <Subscribe title={subscribe.title} text={subscribe.text}/>
      </div>
    );
  }
}

export default Main;

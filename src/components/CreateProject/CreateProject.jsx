import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './CreateProject.module.scss';
import Button from '../Button/Button';
import createProject from '../../assets/images/createproject.svg';

export class CreateProject extends Component {
  render() {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Create your <span style={{ color: '#f2994a' }}>next project</span>{' '}with startup <br/>framework</h2>
          <Button text={'Get Started'} variant={'full'} />
        </div>
        <ReactSVG src={createProject} />
      </section>
    );
  }
}
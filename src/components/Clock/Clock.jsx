import React, { Component } from 'react';

import styles from './Clock.module.scss';

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
}

export default Clock;

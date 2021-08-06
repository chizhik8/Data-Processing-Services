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
        <time>{this.state.date.toLocaleTimeString()}</time>
      </div>
    );
  }

  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export default Clock;

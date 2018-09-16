'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routing/routes.json';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER.path}>to Counter</Link>
      </div>
    );
  }
}

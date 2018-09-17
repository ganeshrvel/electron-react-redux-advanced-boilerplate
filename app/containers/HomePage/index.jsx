'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/index.scss';
import routes from '../../routing/routes';

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

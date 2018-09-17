'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routing/routes.json';
import styles from './styles/index.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h1>Resource not found!</h1>
        <Link to={routes.Home.path}>Home</Link>
      </div>
    );
  }
}

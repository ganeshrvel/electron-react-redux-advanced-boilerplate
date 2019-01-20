'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { routes } from '../../routing';
import styles from './styles/index.scss';
import { APP_TITLE } from '../../constants/meta';

export default class SecondPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet titleTemplate={`%s - ${APP_TITLE}`}>
          <title>Second Page!</title>
        </Helmet>
        <div className={styles.container}>
          <h1>This is the second page!</h1>
          <Link to={routes.Home.path}>Go back</Link>
        </div>
      </React.Fragment>
    );
  }
}

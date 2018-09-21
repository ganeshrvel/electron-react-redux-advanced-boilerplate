'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/index.scss';
import { Helmet } from 'react-helmet';
import { routes } from '../../routing';
import { title } from '../../utils/meta';
import { imgsrc } from '../../utils/imgsrc';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet titleTemplate={`%s | ${title}`}>
          <title>Home</title>
        </Helmet>
        <div className={styles.container}>
          <h3>Electron-React-Redux advanced and scalable boilerplate</h3>
          <Link to={routes.Counter.path}>Counter</Link>
          {/*//To import a local image:
          
          <img
            src={imgsrc('keyboard.jpg')}
            width="100px"
            height="auto"
          />
          
          imgsrc
           * default path: ../public/images/
           * @param filePath (string)
           * @param returnNoImageFound (bool) (optional)
          */}
        </div>
      </React.Fragment>
    );
  }
}

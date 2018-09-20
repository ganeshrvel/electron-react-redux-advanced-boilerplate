'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/index.scss';
import { routes } from '../../routing';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>Electron-React-Redux advanced and scalable boilerplate</h3>
        <Link to={routes.Counter.path}>Counter</Link>
        {/*
       
       //To import a local image:
       <img
          src={require('../../public/images/keyboard.jpg')}
          width="100px"
          height="auto"
        />
       
        */}
      </div>
    );
  }
}

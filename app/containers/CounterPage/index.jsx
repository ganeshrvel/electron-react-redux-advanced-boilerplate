'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import styles from './styles/index.scss';
import { routes } from '../../routing';

class Counter extends Component {
  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter,
      apiFetchDemo
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.Home.path}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.demoFetch}`}>
          <textarea
            rows="20"
            cols="50"
            value={
              counter.demoFetchData
                ? JSON.stringify(counter.demoFetchData)
                : `Click Fetch Demo btn`
            }
            onChange={() => JSON.stringify(counter.demoFetchData)}
          />
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter.count}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={() => increment()}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={() => decrement()}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
          <button
            className={styles.btn}
            onClick={() => incrementIfOdd()}
            data-tclass="btn"
            type="button"
          >
            odd
          </button>
          <button
            className={styles.btn}
            onClick={() => incrementAsync()}
            data-tclass="btn"
            type="button"
          >
            async
          </button>
          <button
            className={styles.btn}
            onClick={() => apiFetchDemo({ title: `DNA` })}
            data-tclass="btn"
            type="button"
          >
            Fetch Demo
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

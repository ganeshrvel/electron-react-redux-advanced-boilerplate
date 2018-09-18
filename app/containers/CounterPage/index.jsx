'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUrl } from '../../api';
import { routes } from '../../routing';
import {
  incrementCounter,
  decrementCounter,
  apiFetchDemoCounter,
  failLoadCounter,
  reqLoadCounter
} from './actions';
import styles from './styles/index.scss';

class Counter extends Component {
  render() {
    const { counter } = this.props;
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
            readOnly
          />
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter.count}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={this.props.incrementOnClick}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={this.props.decrementOnClick}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
          <button
            className={styles.btn}
            onClick={this.props.incrementIfOddOnClick}
            data-tclass="btn"
            type="button"
          >
            odd
          </button>
          <button
            className={styles.btn}
            onClick={this.props.incrementAsyncOnClick.bind(this, 1000)}
            data-tclass="btn"
            type="button"
          >
            async
          </button>
          <button
            className={styles.btn}
            onClick={this.props.apiFetchDemoAsyncOnClick.bind(this, {
              title: `DNA`
            })}
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

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      incrementOnClick: event => (_, getState) => {
        dispatch(incrementCounter());
      },
      decrementOnClick: event => (_, getState) => {
        dispatch(decrementCounter());
      },
      incrementIfOddOnClick: event => (_, getState) => {
        const { counter } = getState();

        if (counter.count % 2 === 0) {
          return;
        }
        dispatch(incrementCounter());
      },
      incrementAsyncOnClick: (delay, event) => (_, getState) => {
        setTimeout(() => {
          dispatch(incrementCounter());
        }, delay);
      },
      apiFetchDemoAsyncOnClick: ({ title }, event) => (_, getState) => {
        dispatch(reqLoadCounter());
        fetchUrl({ title })
          .then(res => {
            dispatch(apiFetchDemoCounter(res));
          })
          .catch(e => dispatch(failLoadCounter(e)));
      }
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

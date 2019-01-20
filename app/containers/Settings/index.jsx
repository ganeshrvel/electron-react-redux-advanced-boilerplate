import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styles } from './styles';
import { withReducer } from '../../store/reducers/withReducer';
import reducers from './reducers';
import {
  makeToggleSettings,
  makeEnableAutoUpdateCheck,
  makeEnableAnalytics,
  makeFreshInstall
} from './selectors';
import {
  enableAnalytics,
  enableAutoUpdateCheck,
  freshInstall,
  toggleSettings
} from './actions';
import SettingsDialog from './components/SettingsDialog';

class Settings extends Component {
  _handleDialogBoxCloseBtnClick = ({ confirm = false }) => {
    const { freshInstall } = this.props;
    this._handleToggleSettings(confirm);

    if (freshInstall !== 0) {
      this._handleFreshInstall();
    }
  };

  _handleToggleSettings = confirm => {
    const { handleToggleSettings } = this.props;
    handleToggleSettings(confirm);
  };

  _handleFreshInstall = () => {
    const { handleFreshInstall } = this.props;

    handleFreshInstall({ isFreshInstall: 0 });
  };

  _handleAutoUpdateCheckChange = ({ ...args }) => {
    const { handleEnableAutoUpdateCheck } = this.props;

    handleEnableAutoUpdateCheck({ ...args });
  };

  _handleAnalyticsChange = ({ ...args }) => {
    const { handleEnableAnalytics } = this.props;

    handleEnableAnalytics({ ...args });
  };

  render() {
    const {
      freshInstall,
      toggleSettings,
      classes: styles,
      enableAutoUpdateCheck,
      enableAnalytics
    } = this.props;
    const showSettings = toggleSettings || freshInstall !== 0;

    return (
      <SettingsDialog
        open={showSettings}
        freshInstall={freshInstall}
        toggleSettings={toggleSettings}
        styles={styles}
        enableAutoUpdateCheck={enableAutoUpdateCheck}
        enableAnalytics={enableAnalytics}
        onAnalyticsChange={this._handleAnalyticsChange}
        onDialogBoxCloseBtnClick={this._handleDialogBoxCloseBtnClick}
        onAutoUpdateCheckChange={this._handleAutoUpdateCheckChange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      handleToggleSettings: data => (_, getState) => {
        dispatch(toggleSettings(data));
      },

      handleFreshInstall: data => (_, getState) => {
        dispatch(freshInstall({ ...data }, getState));
      },

      handleEnableAutoUpdateCheck: ({ ...data }) => (_, getState) => {
        dispatch(enableAutoUpdateCheck({ ...data }, getState));
      },

      handleEnableAnalytics: ({ ...data }) => (_, getState) => {
        dispatch(enableAnalytics({ ...data }, getState));
      }
    },
    dispatch
  );

const mapStateToProps = (state, props) => {
  return {
    freshInstall: makeFreshInstall(state),
    toggleSettings: makeToggleSettings(state),
    enableAutoUpdateCheck: makeEnableAutoUpdateCheck(state),
    enableAnalytics: makeEnableAnalytics(state)
  };
};

export default withReducer('Settings', reducers)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Settings))
);

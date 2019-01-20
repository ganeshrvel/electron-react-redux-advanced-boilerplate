'use strict';

import React, { PureComponent } from 'react';
import electronIs from 'electron-is';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { privacyPolicyWindow } from '../../../utils/createWindows';

const isMas = electronIs.mas();

export default class SettingsDialog extends PureComponent {
  render() {
    const {
      open,
      freshInstall,
      styles,
      enableAutoUpdateCheck,
      enableAnalytics,
      onAnalyticsChange,
      onDialogBoxCloseBtnClick,
      onAutoUpdateCheckChange
    } = this.props;

    return (
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        aria-labelledby="settings-dialogbox"
        disableEscapeKeyDown={false}
        onEscapeKeyDown={() =>
          onDialogBoxCloseBtnClick({
            confirm: false
          })
        }
      >
        <Typography variant="h5" className={styles.title}>
          Settings
        </Typography>
        <DialogContent>
          <FormControl component="fieldset" className={styles.fieldset}>
            <div className={styles.block}>
              <Typography variant="body1" className={styles.subheading}>
                General Settings
              </Typography>

              {!isMas && (
                <FormGroup>
                  <Typography variant="subtitle2" className={styles.subtitle}>
                    Enable auto-update check
                  </Typography>

                  <FormControlLabel
                    className={styles.switch}
                    control={
                      <Switch
                        checked={enableAutoUpdateCheck}
                        onChange={() =>
                          onAutoUpdateCheckChange({
                            toggle: !enableAutoUpdateCheck
                          })
                        }
                      />
                    }
                    label={enableAutoUpdateCheck ? `Enabled` : `Disabled`}
                  />
                </FormGroup>
              )}

              <FormGroup className={styles.formGroup}>
                <Typography variant="subtitle2" className={styles.subtitle}>
                  Enable anonymous usage statistics gathering
                </Typography>

                <FormControlLabel
                  className={styles.switch}
                  control={
                    <Switch
                      checked={enableAnalytics}
                      onChange={() =>
                        onAnalyticsChange({
                          toggle: !enableAnalytics
                        })
                      }
                    />
                  }
                  label={enableAnalytics ? `Enabled` : `Disabled`}
                />
                {freshInstall ? (
                  <Paper className={`${styles.onBoardingPaper}`} elevation={0}>
                    <div className={styles.onBoardingPaperArrow} />
                    <Typography
                      component="p"
                      className={`${styles.onBoardingPaperBody}`}
                    >
                      Choose your privacy settings. Use the toggles above to
                      enable or disable them.
                    </Typography>
                  </Paper>
                ) : null}
                <Typography variant="caption">
                  We do not gather any kind of personal information and neither
                  do we sell your data. We use this information only to improve
                  the User Experience and squash some bugs.&nbsp;
                  <a
                    className={styles.a}
                    onClick={() => {
                      privacyPolicyWindow(true);
                    }}
                  >
                    Learn more...
                  </a>
                </Typography>
              </FormGroup>
            </div>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              onDialogBoxCloseBtnClick({
                confirm: false
              })
            }
            color="primary"
            className={classNames(styles.btnPositive)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

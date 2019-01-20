'use strict';

/* eslint no-case-declarations: off */

import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { log } from '@Log';
import { routes } from '../../../routing';
import { styles } from '../styles/BodyAreaPane';

class BodyAreaPane extends PureComponent {
  render() {
    const { classes: styles, onSendAlertsBtn } = this.props;

    return (
      <div className={styles.root}>
        <h3>Electron-React-Redux advanced and scalable boilerplate</h3>
        <div className={styles.btnWrapper}>
          <Button
            variant="outlined"
            color="secondary"
            className={styles.btn}
            onClick={onSendAlertsBtn}
          >
            SEND ERROR
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            className={styles.btn}
            onClick={onSendAlertsBtn.bind(this, {
              variant: 'info',
              autoHideDuration: 3000
            })}
          >
            TIMEOUT INFO ALERT 3 second
          </Button>
        </div>
        <div className={styles.btnWrapper}>
          <Button
            variant="contained"
            color="secondary"
            className={styles.btn}
            onClick={onSendAlertsBtn.bind(this, {
              variant: 'warning'
            })}
          >
            SEND WARNING
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={styles.btn}
            onClick={onSendAlertsBtn.bind(this, {
              variant: 'success'
            })}
          >
            SUCCESS ALERT
          </Button>
        </div>
        <div>
          <Link to={routes.SecondPage.path}>Goto Second Page</Link>

          {/*
          // Import a image from the local path.
          // Default images folder: ./app/public/images
          
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
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(BodyAreaPane));

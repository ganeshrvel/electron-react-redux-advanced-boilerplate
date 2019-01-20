'use strict';

/* eslint no-case-declarations: off */

import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { log } from '@Log';
import { styles } from '../styles/ToolbarAreaPane';
import ToolbarBody from './ToolbarBody';

class ToolbarAreaPane extends PureComponent {
  render() {
    const { classes: styles, ...parentProps } = this.props;

    return <ToolbarBody styles={styles} {...parentProps} />;
  }
}

export default withStyles(styles)(ToolbarAreaPane);

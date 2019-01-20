'use strict';

import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { imgsrc } from '../../../utils/imgsrc';

export default class ToolbarAreaPane extends PureComponent {
  activeToolbarList = ({ ...args }) => {
    const { toolbarList } = args;

    const _activeToolbarList = toolbarList;

    Object.keys(_activeToolbarList).map(a => {
      const item = _activeToolbarList[a];
      switch (a) {
        case 'settings':
          _activeToolbarList[a] = {
            ...item
          };
          break;
        default:
          break;
      }

      return _activeToolbarList;
    });

    return _activeToolbarList;
  };

  render() {
    const {
      styles,
      toolbarList,
      handleDoubleClickToolBar,
      handleToolbarAction
    } = this.props;

    /* Control what items should be enabled on the titlebar */
    const _toolbarList = this.activeToolbarList({
      toolbarList
    });

    return (
      <div className={styles.root}>
        <AppBar position="static" elevation={0} className={styles.appBar}>
          <Toolbar
            className={styles.toolbar}
            disableGutters
            onDoubleClick={event => {
              handleDoubleClickToolBar(event);
            }}
          >
            <div className={styles.toolbarInnerWrapper}>
              {Object.keys(_toolbarList).map(a => {
                const item = _toolbarList[a];
                return (
                  <Tooltip key={a} title={item.label}>
                    <div className={`${styles.navBtns} ${styles.noAppDrag}`}>
                      <IconButton
                        aria-label={item.label}
                        disabled={!item.enabled}
                        onClick={() => handleToolbarAction(a)}
                        className={classNames({
                          [styles.disabledNavBtns]: !item.enabled,
                          [styles.invertedNavBtns]: item.invert
                        })}
                      >
                        <img
                          alt={item.label}
                          src={imgsrc(item.imgSrc, false)}
                          className={classNames(styles.navBtnImgs)}
                        />
                      </IconButton>
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

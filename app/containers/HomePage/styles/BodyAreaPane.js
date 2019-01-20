'use strict';

import { variables, mixins } from '../../../styles/js';

export const styles = theme => {
  return {
    root: {
      padding: 20
    },
    btnWrapper: {
      ...mixins().center,
      width: '100%',
      textAlign: 'center'
    },
    btn: {
      margin: 10
    }
  };
};

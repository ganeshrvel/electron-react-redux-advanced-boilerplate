'use strict';

import { prefixer } from './index';

const prefix = '@@HOME';

const types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};

export default prefixer(types, prefix);

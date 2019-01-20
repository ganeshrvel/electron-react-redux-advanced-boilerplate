'use strict';

import prefixer from '../../utils/reducerPrefixer';

const prefix = '@@Home';
const actionTypesList = [];

export const actionTypes = prefixer(prefix, actionTypesList);

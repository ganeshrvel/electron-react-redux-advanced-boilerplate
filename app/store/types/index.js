'use strict';

import { reduce } from 'lodash';

export function prefixer(types, prefix) {
  return reduce(
    types,
    (result, value, key) => {
      result[key] = `${prefix}/${key}`;
      return result;
    },
    {}
  );
}

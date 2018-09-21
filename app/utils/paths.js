'use strict';

import path from 'path';
const root = process.cwd();
export const PATHS = {
  root: root,
  app: path.resolve(root, './app'),
  dist: path.resolve(root, './app/dist'),
  nodeModules: path.resolve(root, './node_modules')
};

'use strict';

/* eslint no-await-in-loop: off */

import {
  readdir as fsReaddir,
  rename as fsRename,
  existsSync,
  statSync,
  lstatSync
} from 'fs';
import Promise from 'bluebird';
import junk from 'junk';
import rimraf from 'rimraf';
import mkdirp from 'mkdirp';
import path from 'path';
import moment from 'moment';
import { exec } from 'child_process';
import findLodash from 'lodash/find';
import { log } from '../../utils/log';
import { isArray } from '../../utils/funcs';

const readdir = Promise.promisify(fsReaddir);
const execPromise = Promise.promisify(exec);

export const promisifiedExec = command => {
  try {
    return new Promise(resolve => {
      execPromise(command, (error, stdout, stderr) => {
        return resolve({
          data: stdout,
          stderr,
          error
        });
      });
    });
  } catch (e) {
    log.error(e);
  }
};

export const promisifiedExecNoCatch = command => {
  return new Promise(resolve => {
    execPromise(command, (error, stdout, stderr) =>
      resolve({
        data: stdout,
        stderr,
        error
      })
    );
  });
};

export const checkFileExists = async filePath => {
  try {
    if (typeof filePath === 'undefined' || filePath === null) {
      return null;
    }

    let _isArray = false;
    if (isArray(filePath)) {
      _isArray = true;
    }

    let fullPath = null;
    if (_isArray) {
      for (let i = 0; i < filePath.length; i += 1) {
        const item = filePath[i];
        fullPath = path.resolve(item);
        if (await existsSync(fullPath)) {
          return true;
        }
      }
      return null;
    }

    fullPath = path.resolve(filePath);
    return await existsSync(fullPath);
  } catch (e) {
    log.error(e);
  }
};

/**
  Local device ->
 */
export const asyncReadLocalDir = async ({ filePath, ignoreHidden }) => {
  try {
    const response = [];
    const { error, data } = await readdir(filePath, 'utf8')
      .then(res => {
        return {
          data: res,
          error: null
        };
      })
      .catch(e => {
        return {
          data: null,
          error: e
        };
      });

    if (error) {
      log.error(error, `asyncReadLocalDir`);
      return { error: true, data: null };
    }

    let files = data;

    files = data.filter(junk.not);
    if (ignoreHidden) {
      files = data.filter(item => !/(^|\/)\.[^\/\.]/g.test(item)); // eslint-disable-line no-useless-escape
    }

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const fullPath = path.resolve(filePath, file);

      if (!existsSync(fullPath)) {
        continue; // eslint-disable-line no-continue
      }
      const stat = statSync(fullPath);
      const isFolder = lstatSync(fullPath).isDirectory();
      const extension = path.extname(fullPath);
      const { size, atime: dateTime } = stat;

      if (findLodash(response, { path: fullPath })) {
        continue; // eslint-disable-line no-continue
      }

      response.push({
        name: file,
        path: fullPath,
        extension,
        size,
        isFolder,
        dateAdded: moment(dateTime).format('YYYY-MM-DD HH:mm:ss')
      });
    }
    return { error, data: response };
  } catch (e) {
    log.error(e);
  }
};

export const promisifiedRimraf = item => {
  try {
    return new Promise(resolve => {
      rimraf(item, {}, error => {
        resolve({
          data: null,
          stderr: error,
          error
        });
      });
    });
  } catch (e) {
    log.error(e);
  }
};

export const delLocalFiles = async ({ fileList }) => {
  try {
    if (!fileList || fileList.length < 1) {
      return { error: `No files selected.`, stderr: null, data: null };
    }

    for (let i = 0; i < fileList.length; i += 1) {
      const item = fileList[i];
      const { error } = await promisifiedRimraf(item);
      if (error) {
        log.error(`${error}`, `delLocalFiles -> rm error`);
        return { error, stderr: null, data: false };
      }
    }

    return { error: null, stderr: null, data: true };
  } catch (e) {
    log.error(e);
  }
};

const promisifiedRename = ({ oldFilePath, newFilePath }) => {
  try {
    return new Promise(resolve => {
      fsRename(oldFilePath, newFilePath, error => {
        resolve({
          data: null,
          stderr: error,
          error
        });
      });
    });
  } catch (e) {
    log.error(e);
  }
};

export const renameLocalFiles = async ({ oldFilePath, newFilePath }) => {
  try {
    if (
      typeof oldFilePath === 'undefined' ||
      oldFilePath === null ||
      typeof newFilePath === 'undefined' ||
      newFilePath === null
    ) {
      return { error: `No files selected.`, stderr: null, data: null };
    }

    const { error } = await promisifiedRename({ oldFilePath, newFilePath });
    if (error) {
      log.error(`${error}`, `renameLocalFiles -> mv error`);
      return { error, stderr: null, data: false };
    }

    return { error: null, stderr: null, data: true };
  } catch (e) {
    log.error(e);
  }
};

const promisifiedMkdir = ({ newFolderPath }) => {
  try {
    return new Promise(resolve => {
      mkdirp(newFolderPath, error => {
        resolve({ data: null, stderr: error, error });
      });
    });
  } catch (e) {
    log.error(e);
  }
};

export const newLocalFolder = async ({ newFolderPath }) => {
  try {
    if (typeof newFolderPath === 'undefined' || newFolderPath === null) {
      return { error: `Invalid path.`, stderr: null, data: null };
    }

    const { error } = await promisifiedMkdir({ newFolderPath });
    if (error) {
      log.error(`${error}`, `newLocalFolder -> mkdir error`);
      return { error, stderr: null, data: false };
    }

    return { error: null, stderr: null, data: true };
  } catch (e) {
    log.error(e);
  }
};

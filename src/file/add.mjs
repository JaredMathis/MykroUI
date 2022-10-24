import fs from 'fs';
import {error} from '../error.mjs';
import path from 'path';

export async function file_add(file_name) {
    let directory_name = path.dirname(file_name);
    if (!await checkFileExists(directory_name)) {
        await fs.promises.mkdir(directory_name, { recursive: true });
    }
    if (await checkFileExists(file_name)) {
        error(`${file_name} exists`);
    }
    await fs.promises.writeFile(file_name, '');
}

function checkFileExists(file) {
    return fs.promises.access(file, fs.constants.F_OK)
             .then(() => true)
             .catch(() => false)
  }
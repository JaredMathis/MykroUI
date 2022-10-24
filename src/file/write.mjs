import fs from 'fs';
import {error} from '../error.mjs';
import path from 'path';

export async function file_write(file_name, contents) {
    let directory_name = path.dirname(file_name);
    if (!await file_exists(directory_name)) {
        await fs.promises.mkdir(directory_name, { recursive: true });
    }
    if (await file_exists(file_name)) {
        error(`${file_name} exists`);
    }
    await fs.promises.writeFile(file_name, contents);
}

function file_exists(file) {
    return fs.promises.access(file, fs.constants.F_OK)
             .then(() => true)
             .catch(() => false)
  }
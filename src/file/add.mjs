import fs from 'fs';

export function file_add(file_name) {
    if (checkFileExists(file_name)) {
        error(`${file_name} exists`);
    }
    fs.promises.writeFile(file_name, '');
}

function checkFileExists(file) {
    return fs.promises.access(file, fs.constants.F_OK)
             .then(() => true)
             .catch(() => false)
  }
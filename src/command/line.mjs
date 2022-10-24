import util from 'util';
import { exec } from 'child_process';
let command_line = util.promisify(exec);

export {command_line};
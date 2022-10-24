import {error} from './error.mjs';
import {command_line} from './command/line.mjs';
import { file_js_name_to_path } from './file/js/name/to/path.mjs';
import { for_each } from './for/each.mjs';

let function_name_argument_index = 2;
let function_name = process.argv[function_name_argument_index];
if (!function_name) {
    error('Expecting command line argument')
}
let remaining_arguments = process.argv
.slice(function_name_argument_index + 1);

async function run() {
    const replaced = file_js_name_to_path(function_name);
    const module_path = './' + replaced + '.mjs';
    let imported = await import(module_path);
    let _function = property_get(imported, function_name);
    await _function(...remaining_arguments);
    await git_acp();
}

run();

async function git_acp() {
    const mykro_command = process.argv.slice(function_name_argument_index).join(' ');
    const when = new Date().toISOString();
    let commit_message = `${mykro_command} ${when}`;
    let commands = [
        'git add *',
        `git commit -m "${commit_message}"`,
        'git push'
    ];
    await for_each(commands, async (command) => {
        const result = await command_line(command);
        console.log({
            command,
            result,
        });
    });
}
function property_get(obj, name) {
    let keys = Object.keys(obj);
    // console.log({keys,name});
    if (!keys.includes(name)) {
        error('TODO');
    }
    return obj[name];
}

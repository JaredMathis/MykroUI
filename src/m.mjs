import {error} from './error.mjs';

let function_name_argument_index = 2;
let function_name = process.argv[function_name_argument_index];
if (!function_name) {
    error('Expecting command line argument')
}
let remaining_arguments = process.argv
.slice(function_name_argument_index + 1);

async function run() {
    const replaced = function_name_to_path(function_name);
    const module_path = './' + replaced + '.mjs';
    let imported = await import(module_path);
    let _function = property_get(imported, function_name);
    await _function(...remaining_arguments)
}

run();

function function_name_to_path(function_name) {
    const replaced = string_replace_all(function_name, '_', '/');
    return replaced;
}

function property_get(obj, name) {
    let keys = Object.keys(obj);
    console.log({keys,name});
    if (!keys.includes(name)) {
        error('TODO');
    }
    return obj[name];
}

function string_replace_all(s, from, to) {
    return s.split(from).join(to);
}

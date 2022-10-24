let file_path = process.argv[2];
if (!file_path) {
    error('Expecting command line argument')
}

async function run() {
    let imported = await import('./' + string_replace_all(process.argv[2], '_', '/') + '.mjs');
    imported
}

run();

function property_get(obj, name) {
    if (!obj.hasOwnProperty(name)) {
        error('TODO');
    }
    return obj[name];
}

function string_replace_all(s, from, to) {
    return s.split(from).join(to);
}

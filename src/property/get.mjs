import { error } from "../error.mjs";

export function property_get(obj, name) {
    let keys = Object.keys(obj);
    // console.log({keys,name});
    if (!keys.includes(name)) {
        error('TODO');
    }
    return obj[name];
}

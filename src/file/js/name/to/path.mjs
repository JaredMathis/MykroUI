import { string_replace_all } from "../../../../string/replace/all.mjs";

export function file_js_name_to_path(function_name) {
    const replaced = string_replace_all(function_name, '_', '/');
    return replaced;
}

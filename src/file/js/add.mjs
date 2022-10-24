import path from "path";
import { mykro_directory_source } from "../../mykro/directory/source.mjs";
import { file_add } from "../add.mjs";
import { file_js_name_to_path } from "./name/to/path.mjs";

export function file_js_add(function_name) {
    let file_path = path.join(mykro_directory_source(), file_js_name_to_path(function_name)) + '.mjs';
    console.log({file_path});
    return;
    file_add(file_path)
}
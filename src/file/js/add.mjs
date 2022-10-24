import path from "path";
import { mykro_directory_source } from "../../mykro/directory/source.mjs";
import { file_write } from "../write.mjs";
import { file_js_name_to_path } from "./name/to/path.mjs";

export async function file_js_add(function_name) {
    const path_without_extension = path.join(mykro_directory_source(), file_js_name_to_path(function_name));
    let file_path = path_without_extension + '.mjs';
    await file_write(file_path, `export function ${function_name}() {
    
}
`)
}
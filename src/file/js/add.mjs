import path from "path";
import { mykro_directory_source } from "../../mykro/directory/source.mjs";
import { file_add } from "../add.mjs";

export function file_js_add(function_name) {
    file_add(path.join([mykro_directory_source(), ]))
}
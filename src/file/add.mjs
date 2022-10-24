import { file_write } from "./write.mjs"

export async function file_add(file_name) {
    await file_write(file_name, '');
}
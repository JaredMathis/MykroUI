import { ui_button } from "./button.mjs";

export function ui_main(parent) {
    await api('file_js_all');
    ui_button(parent, 'test');
}

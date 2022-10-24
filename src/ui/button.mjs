export function ui_button(parent, text) {
    let button = ui_element(parent, 'button');
    ui_element_text(button, text);
    return button;
}
export function ui_element(parent, tag_name) {
    let element = document.createElement(tag_name);
    parent.appendChild(element);
    return element;
}

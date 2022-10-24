export async function for_each(items, lambda) {
    for (let i of items) {
        await lambda(i);
    }
}

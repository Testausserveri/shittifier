export default function everythingTrue(data) {
    // true will become !!true
    // false will become !true
    return data
        .replace(/([^a-z|^0-9])(true)([^a-z|^0-9])/gi, '$1!false$3')
        .replace(/([^a-z|^0-9])(false)([^a-z|^0-9])/gi, '$1!true$3');
}
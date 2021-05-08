export default function everythingTrue(data) {
    // true will become !false
    // false will become !true
    return data
        .replace(/([^a-z0-9])(true)([^a-z0-9])/gi, '$1!false$3')
        .replace(/([^a-z0-9])(false)([^a-z0-9])/gi, '$1!true$3');
}
export default function everythingTrue(data) {
    // true will become !!true
    // false will become !true
    return data
        .replace(/([^a-q])(true)([^a-q])/gi, '$1!false$3')
        .replace(/([^a-q])(false)([^a-q])/gi, '$1!true$3');

}
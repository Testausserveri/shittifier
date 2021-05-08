export default function inverseBoolean(data) {
    // true will become !!true
    // false will become !true
    return data
        .replace(/true/gi, '!false')
        .replace(/false/gi, '!true');
}
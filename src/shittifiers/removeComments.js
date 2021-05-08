export default function inverseBoolean(data) {
    return data
        .replace(/\s*\/\/.+$/gmi, '')
        .replace(/\s*\/\*(.|\n)*?\*\//gmi, '');
}

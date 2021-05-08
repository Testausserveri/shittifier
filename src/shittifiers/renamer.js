function fancyName(name) {
    return name
            .replace(/b/gi, 'б')
            .replace(/k/gi, 'к')
            .replace(/h/gi, 'х')
            .replace(/r/gi, 'р')
            .replace(/t/gi, 'т')
            .replace(/z/gi, 'з')
            .replace(/g/gi, 'г')
            .replace(/f/gi, 'ф')
            .replace(/w/gi, 'ш')
            .replace(/i/gi, 'и')
            .replace(/n/gi, 'н')
            .replace(/s/gi, 'с')
            .replace(/p/gi, 'п');
}
export default function renamer(data) {
    let output = data;

    let names = data.matchAll(/((const|let|var) (.+?) )/gim);
    for (let name of names) {
        let match = [...name][3];

        // replace only if the name is not used dangerously, e.g. inside strings
        if ([...data.matchAll(new RegExp('(\'|"|`).*?' + match + '.*?(\'|"|`)', 'gim'))].length > 0) {
            console.log(match, fancyName(match))
            output = output.replace(new RegExp(match, 'gim'), fancyName(match))
        }
    }

    return output;
}
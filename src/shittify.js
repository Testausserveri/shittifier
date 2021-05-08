import { promises as fs } from 'fs';
const shittifierPath = 'shittifiers/';

const loadShittifiers = async () => {
    let shittifiers = [];
    const scripts = await fs.readdir('./src/' + shittifierPath);

    for (const script of scripts) {
        shittifiers.push((await import('./' + shittifierPath + script)).default);
    }

    return shittifiers;
}
export const shittify = (input) => {
    return new Promise(async (resolve, reject) => {
        const shittifiers = await loadShittifiers();
        let output = input;
        
        for (const shittifier of shittifiers) {
            output = shittifier(output);
        }

        resolve(output);
    })
};

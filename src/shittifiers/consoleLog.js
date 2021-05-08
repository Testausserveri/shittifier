export default function consoleLog(data) {
    // console.log -> process.stdout.write
    // and add a new line with console.log()
    return data.replace(/console\.log\((.*)\)/gi, "process.stdout.write($1) \n                              process.stdout.write('\\r\\n')").replace(/false/gi, '!true');
}
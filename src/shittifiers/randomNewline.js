export default function randomNewLine(data) {
  // 1 => Number(1);
  let randomLineBreaks = () => {
    return '\n'.repeat(Math.random()*4 + 1);
  }
  return data
    .replace(/\n/g, randomLineBreaks);
}

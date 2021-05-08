export default function datatypeFunctions(data) {
  // 1 => Number(1);
  // "text" => String("text");
  // true => Boolean(true);
  return data
        .replace(/true/g,'Boolean(true)') // Bools
        .replace(/false/g,'Boolean(false)')
        .replace(/(".+")/g, 'String($1)') // Strings
        .replace(/('.+')/g, 'String($1)')
        .replace(/(\d+)/g,'Number($1)'); // Numbers
}

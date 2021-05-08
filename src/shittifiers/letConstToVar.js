export default function constLetToVar(data) {
  // let & const => var
  return data
        .replace(/let/g,'var')
        .replace(/const/g,'var')
}

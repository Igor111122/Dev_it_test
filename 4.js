function arrayToObject(arr) {
  const result = {};

  // Проходим по каждому элементу массива
  for (const [key, value] of arr) {
    // Если значение является массивом, вызываем рекурсивно arrayToObject
    if (Array.isArray(value)) {
      result[key] = arrayToObject(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}
var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

const result = arrayToObject(arr);

console.log(result);
// Output: {
//   name: 'developer',
//   age: 5,
//   skills: {
//     html: 4,
//     css: 5,
//     js: 5
//   }
// }

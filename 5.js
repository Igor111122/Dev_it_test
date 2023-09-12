function objectToArray(obj) {
  const result = [];

  // Проходим по каждому свойству объекта
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Если значение является объектом, вызываем рекурсивно objectToArray
      if (typeof value === 'object' && !Array.isArray(value)) {
        result.push([key, objectToArray(value)]);
      } else {
        result.push([key, value]);
      }
    }
  }

  return result;
}
const obj = {
  name: 'developer',
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5
  }
};

const result = objectToArray(obj);

console.log(result);
// Output: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]]

function mapObject(obj, prefix = '') {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullPath = prefix ? `${prefix}/${key}` : key;

      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        // Если значение является объектом, вызываем рекурсивно mapObject
        const nestedMap = mapObject(obj[key], fullPath);
        Object.assign(result, nestedMap);
      } else {
        // Если значение не является объектом, добавляем его в результат
        result[fullPath] = obj[key];
      }
    }
  }

  return result;
}
const obj = {
  a: {
    b: {
      c: 43453,
      d: 'My name is Igor'
    },
    e: [1, 2, 5]
  }
};

const result = mapObject(obj);

console.log(result);
// Output: {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1, 2, 3]
// }

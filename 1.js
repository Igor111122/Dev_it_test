function deepEqual(obj1, obj2) {
  // Проверяем, являются ли obj1 и obj2 объектами
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2; // Если не оба объекта, просто сравниваем их
  }

  // Проверяем, имеют ли объекты одинаковое количество свойств
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Проверяем каждое свойство объектов рекурсивно
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  // Если все проверки пройдены, объекты идентичны
  return true;
}
  
console.log(deepEqual({ name: 'test' }, { name: 'test' })); // true
console.log(deepEqual({ name: 'test' }, { name: 'test1' })); // false
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } })); // false
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // false

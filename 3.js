async function bulkRun(functionsAndArgs) {
  // Создаем массив для хранения результатов
  const results = [];

  // Проходим по каждой паре [функция, аргументы]
  for (const [func, args] of functionsAndArgs) {
    // Создаем Promise для выполнения функции с аргументами
    const resultPromise = new Promise((resolve) => {
      // Вызываем функцию с аргументами и колбэком для получения результата
      func(...args, (result) => {
        resolve(result); // Разрешаем Promise с результатом функции
      });
    });

    // Добавляем Promise в массив результатов
    results.push(await resultPromise);
  }

  // Возвращаем массив результатов после выполнения всех функций
  return results;
}
const f1 = (cb) => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Output: [1, 2, [3, 4]]

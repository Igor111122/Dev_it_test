function chunkArray(arr, chunkSize) {
  let index = 0; // Начальный индекс для разделения массива
  return {
    next: function () {
      if (index >= arr.length) {
        // Если индекс превышает длину массива, итерация завершена
        return { value: undefined, done: true };
      }

      // Вычисляем следующую часть массива
      const chunk = arr.slice(index, index + chunkSize);

      // Увеличиваем индекс для следующей итерации
      index += chunkSize;

      // Возвращаем текущую часть массива и информацию о завершении
      return { value: chunk, done: false };
    },
  };
}
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next()); // { value: [1, 2, 3], done: false }
console.log(iterator.next()); // { value: [4, 5, 6], done: false }
console.log(iterator.next()); // { value: [7, 8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }

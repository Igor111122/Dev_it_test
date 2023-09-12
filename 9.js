function add(num) {
  let sum = num; // Инициализируем сумму первым числом

  // Создаем новую функцию, которая ожидает следующее число
  const nextAdd = function (nextNum) {
    sum += nextNum; // Добавляем число к сумме
    return nextAdd; // Возвращаем себя же для возможности следующего вызова
  };

  // Приводим функцию к числу (когда нужно получить результат)
  nextAdd.valueOf = function () {
    return sum;
  };

  return nextAdd; // Возвращаем созданную функцию
}

// Приводим результат к числу
console.log(Number(add(1)(2))); // == 3
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); // == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5

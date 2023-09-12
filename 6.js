function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a, b) {
  while (true) { // Бесконечный цикл
    try {
      return primitiveMultiply(a, b); // Попытка выполнить умножение
    } catch (error) {
      if (error instanceof ErrorException) {
        throw error; // Если это ErrorException, прокинуть его наверх
      } else if (error instanceof NotificationException) {
        // Если это NotificationException, продолжить цикл и повторить попытку
        continue;
      }
    }
  }
}

try {
  console.log(reliableMultiply(8, 8));
} catch (error) {
  console.log("Caught an error:", error);
}

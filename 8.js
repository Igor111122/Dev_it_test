function combos(num) {
  const result = [];

  function findCombos(currentCombo, remainingNum, start) {
    if (remainingNum === 0) {
      result.push(currentCombo.slice());
      return;
    }

    for (let i = start; i <= remainingNum; i++) {
      currentCombo.push(i);
      findCombos(currentCombo, remainingNum - i, i);
      currentCombo.pop();
    }
  }

  findCombos([], num, 1);
  return result;
}
console.log(combos(3));
console.log(combos(10));

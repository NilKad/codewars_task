function findOutlier(integers) {
  let countEven = 0;
  let numEven = null;
  let countOdd = 0;
  let numOdd = null;
  for (const item of integers) {
    if (item % 2 === 0) {
      countEven++;
      numEven = item;
    } else {
      countOdd += 1;
      numOdd = item;
    }
    if (countEven === 1 && countOdd > 1) return numEven;
    if (countOdd === 1 && countEven > 1) return numOdd;
  }
  return "x";
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));

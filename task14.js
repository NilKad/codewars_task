function findUniq(arr) {
  const s = new Set(arr);
  // s.entries(arr);
  // console.log(s);
  let num1 = arr[0];
  let countNum1 = 0;
  let num2 = null;
  let countNum2 = 0;
  for (const item of arr) {
    if (num1 === item) {
      countNum1++;
    } else {
      num2 = item;
      countNum2++;
    }
    if (countNum1 === 1 && countNum2 > 1) return num1;
    if (countNum2 === 1 && countNum1 > 1) return num2;
  }
}
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));

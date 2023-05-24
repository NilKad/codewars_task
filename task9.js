function rowSumOddNumbers(n) {
  // TODO

  const resEnd = (n * (n + 1)) / 2;
  const resStart = (n * (n - 1)) / 2 + 1;
  // const summ = (resEnd * (resEnd + 1)) / 2 - (resStart * (resStart - 1)) / 2;
  const summ =
    ((resEnd * (resEnd + 1)) / 2 - (resStart * (resStart - 1)) / 2) * 2 - n;
  // const t = ((Math.pow(n, 2) + n) * (Math.pow(n, 2) + n + 1)) / 8;
  // console.log(t);
  // const summ = resEnd * (resEnd + 1) - resStart * (resStart - 1) - n;
  // const res = n * (n + 1) - 1;
  // const res = n * (n - 1) + 1;
  console.log("resStart: ", resStart, "\tresEnd: ", resEnd, "\tsumm: ", summ);
  return n * n * n;
}

console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(6));

function digPow(n, p) {
  const nums = n.toString().split("");
  const summ = nums.reduce((acc, item) => {
    return acc + Math.pow(item, p++);
  }, 0);
  return summ % n === 0 ? summ / n : -1;
}
console.log("!!!! ", digPow(89, 1));
console.log("!!!! ", digPow(92, 1));
console.log("!!!! ", digPow(46288, 3));

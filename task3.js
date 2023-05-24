var isSquare = function (n) {
  return n === Math.pow(Math.floor(Math.sqrt(n) * 1), 2);
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
console.log(isSquare(41));

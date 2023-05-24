function squareDigits(num) {
  const numArray = num.toString().split("");
  return numArray.reduce((acc, current) => acc + Math.pow(current, 2), "");
}

squareDigits(9119);

function solution(number) {
  let acc = 0;
  for (let index = 1; index < number; index++) {
    acc += index % 3 === 0 || index % 5 === 0 ? index : 0;
  }
  return acc;
}

console.log(solution(10));

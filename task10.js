function nbYear(p0, percent, aug, p) {
  // your code
  percent = percent / 100;
  let year = 0;
  while (p0 < p) {
    p0 += Number.parseInt(p0 * percent * 1) + aug;
    console.log(p0);
    year += 1;
  }
  return year;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));

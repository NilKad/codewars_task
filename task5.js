function order(words) {
  // ...
  const w = words.split(" ");
  const res = w.sort((a, b) => a.match(/[1-9]/) - b.match(/[1-9]/));
  // return res.join(" ");
  return words
    .split(" ")
    .sort((a, b) => a.match(/[1-9]/) - b.match(/[1-9]/))
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

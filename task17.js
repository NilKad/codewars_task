function firstNonRepeatingLetter(s) {
  const sa = s.split("");
  for (const item of sa) {
    const count = s.match(new RegExp(item, "gi")).length;
    if (count === 1) return item;
  }
  return "";
}

console.log(firstNonRepeatingLetter("a", "a"));
console.log(firstNonRepeatingLetter("stress", "t"));
console.log(firstNonRepeatingLetter("moonmen", "e"));

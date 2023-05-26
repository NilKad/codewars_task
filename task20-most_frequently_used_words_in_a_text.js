function topThreeWords(text) {
  const countWords = new Map();
  const words = text.trim().split(/[^a-zA-Z']+/);
  words.forEach((el) => {
    const newEl = el.toLowerCase();
    countWords.set(newEl, countWords.has(newEl) ? countWords.get(newEl) + 1 : 1);
    // if (countWords.has(newEl)) {
    //   countWords.set(newEl, countWords.get(newEl) + 1);
    // } else {
    //   el !== "" && el !== "'" && countWords.set(newEl, 1);
    // }
  });
  countWords.delete("'");
  countWords.delete("");

  // console.log(
  //   "countWords: ",
  //   [...countWords]
  //     .sort((a, b) => b[1] - a[1])
  //     .slice(0, 3)
  //     .map((a) => a[0])
  // );
  const values = Array.from(countWords.values()).sort((a, b) => b - a);
  const res = [];
  // for (let i = 0; i < 3 && i < values.length; i++) {
  //   for (const item of countWords) {
  //     if (item[1] === values[i] && !res.includes(item[0])) {
  //       res.push(item[0]);
  //       break;
  //     }
  //   }
  // }
  // return res;
  return [...countWords]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((a) => a[0]);
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e f f f f"), ["e", "d", "a"]);
console.log(topThreeWords("a b c d e f g h "), ["e", "d", "a"]);
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ["e", "d", "a"]);

console.log(topThreeWords("a a c b b"), ["a", "b", "c"]);

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"), [
  "e",
  "ddd",
  "aa",
]);

console.log(topThreeWords("  ///wont won't won't "), ["won't", "wont"]);

console.log(topThreeWords("  , e   .. "), ["e"]);

console.log(topThreeWords("  ...  "), []);

console.log(topThreeWords("  '  "), []);

console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
  ["a", "of", "on"]
);

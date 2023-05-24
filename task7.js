function reverseWords(str) {
  let str1 = "";
  str.split(/\s+/).map((e) => {
    str1 += str.slice(0, str.indexOf(e));
    str1 += e.split("").reverse().join("");
    str = str.slice(str.indexOf(e) + e.length);
  });
  return str1;

  // const words = str.split(" ");
  // console.log(words);

  // return str
  //   .split(" ")
  //   .map(function (word) {
  //     return word.split("").reverse().join("");
  //   })
  //   .join(" ");
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));
console.log(reverseWords("stressed   desserts"));

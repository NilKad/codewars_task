function incrementString(strng) {
  const regex = new RegExp(/\d+$/);
  const s = strng.match(regex);
  if (s) {
    const num = (Number.parseInt(s[0]) + 1).toString().padStart(s[0].length, "0");
    const res = strng.replace(regex, num);
    return res;
  }
  return strng + 1;
}
console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foobar999"), "foobar1000");
console.log(incrementString("foobar00999"), "foobar01000");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar1"), "foobar2");
console.log(incrementString("1"), "2");
console.log(incrementString("009"), "010");
console.log(incrementString("fo99obar99"), "fo99obar100");
console.log(incrementString("fo98obar99"), "fo98obar100");

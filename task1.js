function likes(names) {
  // TODO
  if (names.length === 0) return "no one likes this";
  let ret = "";
  switch (names.length) {
    case 0:
      ret = "no one likes this";
      break;
    case 1:
      ret = `${names[0]} likes this`;
      break;
    case 2:
      ret = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      ret = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      ret = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others others like this`;
      break;
  }
  return ret;
}

console.log(likes([]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

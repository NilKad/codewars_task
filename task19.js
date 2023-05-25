function dirReduc(arr) {
  let isfound = true;
  while (isfound) {
    isfound = false;
    for (let i = 1; i < arr.length; i++) {
      const f = arr[i - 1];
      const s = arr[i];
      if (f === s) continue;
      if ((f === "NORTH" || f === "SOUTH") && (s == "EAST" || s === "WEST")) continue;
      if ((s === "NORTH" || s === "SOUTH") && (f == "EAST" || f === "WEST")) continue;
      arr = arr.filter((_, index) => index !== i - 1 && index !== i);
      isfound = true;
      break;
    }
  }
  return arr;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);

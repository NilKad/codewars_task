function humanReadable(seconds) {
  const or = seconds;
  const sec = seconds % 60;
  seconds = Math.floor(seconds / 60);
  const min = seconds % 60;
  seconds = Math.floor(seconds / 60);
  const hour = seconds;
  // const res = `${or}\t ${Intl.NumberFormat("ru", {
  //   minimumIntegerDigits: 2,
  // }).format(hour)}:${Intl.NumberFormat("ru", {
  //   minimumIntegerDigits: 2,
  // }).format(min)}:${Intl.NumberFormat("ru", {
  //   minimumIntegerDigits: 2,
  // }).format(sec)}`;
  // const res = new Date(0, 0, 0, hour, min, sec).toLocaleTimeString("ru");
  return res;
}

// console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(3600));
console.log(humanReadable(45296));
console.log(humanReadable(86399));
console.log(humanReadable(86400));
console.log(humanReadable(359999));

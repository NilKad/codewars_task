function getCount(str) {
  console.log(str.match(/[aeiou]/gi)?.length || 0);
  // return str.match(/[aeiou]/gi).length;
  return str.match(/[aeiou]/gi)?.length || 0;
}

getCount("of lower case letters and/or spaces");
getCount("my pyx");

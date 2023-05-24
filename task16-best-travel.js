function chooseBestSum(t, k, ls) {
  ls.sort();
  console.log(ls);
  let summ = 0;
  function arrInit(count) {
    const array = [];
    for (let i = 0; i < count; i++) {
      if (i + 1 === count) {
        array.push(ls.length - 1);
      } else {
        array.push(i);
      }
    }
    return array;
  }
  function calcSumm(arrIndex) {
    const sumCalc = arrIndex.reduce((acc, item) => acc + ls[item], 0);
    if (sumCalc === t) {
      isFound = true;
      summ = sumCalc;
      console.log("!found: ", indexArray, "\tsumm: ", summ);
    }
    if (sumCalc > summ && sumCalc <= t) {
      summ = sumCalc;
    }
    return sumCalc;
  }
  if (ls.length < 3) return null;
  const indexArray = new Array(...arrInit(k));
  let isFound = false;
  const lastIndex = indexArray.length - 1;
  while (!isFound) {
    const lastIndexValue = indexArray[lastIndex];
    let summArray = calcSumm(indexArray);

    if (summArray > t) {
      console.log("1. lasstIndex: ", lastIndex);
      if (indexArray[0] === lastIndexValue - 1) {
        console.log("Is found !!lastIndex ERROR");
        isFound = true;
        console.log("!found: ", indexArray, "summArray: ", summArray, "\tsumm: ", summ);
      } else {
        indexArray[lastIndex] -= 1;
        indexArray[0] = 0;
      }
    } else {
      while (summArray < t && !isFound) {
        console.log("2. firstIndex: ", indexArray[0], "\tcalcSumm: ", summArray);
        console.log("lastindex: = ", lastIndex);
        if (lastIndexValue > indexArray[0] + 1) {
          console.log("increment indexArray[0]");
          indexArray[0] += 1;
        } else {
          console.log("Not found. Left increment is MAX");
          isFound = true;
          console.log("!found: ", indexArray, "summArray: ", summArray, "\tsumm: ", summ);
        }
        console.log("End 2 While");
        summArray = calcSumm(indexArray);
      }

      if (indexArray[0] < lastIndex - 1) {
        indexArray[0] = 0;
        indexArray[lastIndex] -= 1;
      }
      // }
    }
  }

  console.log(indexArray);
}
var ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(109, 2, ts), "\t", 163);
// ts = [50];
// console.log(chooseBestSum(163, 3, ts), "\t", null);
// ts = [91, 74, 73, 85, 73, 81, 87];
// console.log(chooseBestSum(230, 3, ts), "\t", 228);

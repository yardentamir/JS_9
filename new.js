/* codewars */

// const text = "Indivisibilities";

// const func = (text) => {
//   const newText = text.toLowerCase();
//   let count = 0;
//   const obj = {};
//   for (let i of newText) {
//     !obj[i] ? (obj[i] = 1) : obj[i]++;
//   }

//   for (let i in obj) {
//     if (obj[i] > 1) count++;
//   }
//   return count;
// };

// console.log(func(text));

// function expressionMatter(a, b, c) {
//   const arr = [a, b, c];
//   const biggest = Math.max(a, b, c);
//   if (arr.indexOf(biggest) > -1) {
//     arr.splice(arr.indexOf(biggest), 1);
//   }
//   console.log(arr);
//   console.log(arr[0]);
//   console.log(arr[1]);
//   return biggest * (arr[0] + arr[0]);
// }

// console.log(expressionMatter(6, 7, 1));

function elevatorDistance(array) {
  return array.reduce((perv, cur, i) => {
    if (array.length - 2 == i) array.splice(i);
    return Math.max(perv, cur) - Math.min(perv, cur);
  });
}

function elevatorDistance2(array) {
  const newArr = array.map((value, i) => {
    return Math.max(value, array[i + 1]) - Math.min(value, array[i + 1]);
  });
  return newArr
    .splice(0, newArr.length - 1)
    .reduce((total, cur) => total + cur);
}

console.log(elevatorDistance2([7, 1, 7, 1]));

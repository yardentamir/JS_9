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

// function elevatorDistance(array) {
//   return array.reduce((perv, cur, i) => {
//     if (array.length - 2 == i) array.splice(i);
//     return Math.max(perv, cur) - Math.min(perv, cur);
//   });
// }

// function elevatorDistance2(array) {
//   const newArr = array.map((value, i) => {
//     return Math.max(value, array[i + 1]) - Math.min(value, array[i + 1]);
//   });
//   return newArr
//     .splice(0, newArr.length - 1)
//     .reduce((total, cur) => total + cur);
// }

// console.log(elevatorDistance2([7, 1, 7, 1]));

// // complete the function
// function solution(string) {
//   let newStr = "";
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     if (char === char.toUpperCase()) {
//       char = " " + char;
//     }
//     newStr += char;
//   }
//   return newStr;
// }

// console.log(solution("helloWorldCaseWhatsUp"));

// function alphabetPosition(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     let code = text.toUpperCase().charCodeAt(i);
//     if (code > 64 && code < 91) result += code - 64 + " ";
//   }

//   return result.slice(0, result.length - 1);
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function revrot(str, sz) {
  if (str === "" && sz === 0) return "";
  const strArr = str.split("");
  const first = strArr[0].splice(1);
  console.log(first);
}

console.log(revrot("123456987654", 6));

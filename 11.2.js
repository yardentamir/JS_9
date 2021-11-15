(function () {
  "use strict";
  const numArr = [1, 2, 3, 4, 5, 6];
  let mixedArr = ["Hello", 2, "me", "name", "t", 8];
  let myStr = "Hello My Name Is Yarden And I'm Happy To Meet You";
  let myStr2 = "hello my name is yarden and i'm happy to meet you";

  const doubleValues = (arr) => arr.map((num) => num * arr.length);
  const onlyEvenValues = (arr) => {
    const newArr = [];
    arr.forEach((num) => {
      if (num % 2 == 0) newArr.push(num);
    });
    return newArr;
  };

  const showFirstAndLast = (arr) => {
    const newArr = [];
    arr.forEach((val) => {
      if (typeof val === "string") {
        if (val.length > 1) {
          newArr.push(val[0] + val[val.length - 1]);
        } else {
          newArr.push(val);
        }
      }
    });
    return newArr;
  };

  const vowelCount = (str) => {
    const strNotCaseS = str.toLowerCase().split(" ").join("").split("");
    const myObj = {};
    strNotCaseS.forEach((char) => {
      if ("aeiou".includes(char)) {
        myObj[char] ? myObj[char]++ : (myObj[char] = 1);
      }
    });
    return myObj;
  };

  const capitalize = (str) => str.toUpperCase();

  const shiftLetters = (str) => {
    const strArr = str.split("");
    const coded = strArr.map((char) => char.charCodeAt() - 1);
    return coded.map((c) => String.fromCharCode(c)).join("");
  };
  const swapCase = (str) => {
    const strArr = str.split(" ");
    const newArr = [];
    strArr.forEach((word, i) => {
      if (i % 2 !== 0) {
        newArr.push(capitalize(word));
      } else {
        newArr.push(word);
      }
    });
    return newArr.join(" ");
  };

  console.log(doubleValues(numArr));
  console.log(onlyEvenValues(numArr));
  console.log(showFirstAndLast(mixedArr));
  console.log(vowelCount(myStr));
  console.log(capitalize(myStr));
  console.log(shiftLetters("bdc"));
  console.log(swapCase(myStr2));
})();

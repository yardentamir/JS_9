const array = [
  {
    name: "mint gum",
  },
  {
    name: "twix",
  },
  {
    name: "m&m",
  },
];

/* Write a function called extractOnlyValue which accepts an array of
objects and a key and returns a new array with the value of each object at
the key
*/

const extractOnlyValue = (arr) => {
  return arr.reduce((perv, obj) => {
    perv.push(obj.name);
    return perv;
  }, []);
};

console.log(extractOnlyValue(array));

/*
 Write a function called countOnlyVowels which accepts a string and
returns an object with the keys as the vowel and the values as the number
of times the vowel appears in the string. This function should be case
insensitive so a lowercase letter and uppercase letter should count

*/
//A, E, I, O, U,Y
const countOnlyVowels = (str) => {
  const strArr = str.toLowerCase().split("");
  return strArr.reduce((obj, char) => {
    if (!/[aeiou]/.test(char)) return obj;
    obj[char] ? obj[char]++ : (obj[char] = 1);
    return obj;
  }, {});
};

console.log(countOnlyVowels("Hello world! im ready"));

/*
Write a function called addKeyAndValue which accepts 3 parameters an
array of objects, key and value and returns the array of objects passed to it
.with each object now including the key and value passed to the function
*/

const countOnlyVowels = (str) => {
  const strArr = str.toLowerCase().split("");
  return strArr.reduce((obj, char) => {
    if (!/[aeiou]/.test(char)) return obj;
    obj[char] ? obj[char]++ : (obj[char] = 1);
    return obj;
  }, {});
};

console.log(countOnlyVowels("Hello world! im ready"));

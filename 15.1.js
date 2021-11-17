// unfixed code
function getSum(arr1, arr2) {
  const sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3][(5, 66, 23)]);

// fixed code

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3], [5, 66, 23]));

// ! questions
/* 
1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.
*/

// ! answers
/* 
1. line 11 and in line 3.
2. i used the terminal debugger and console.log() function
3. in line 11 you should separate the arguments with , 
in line 3 the variable should be declared as let because we want to change it's value;
4. Fix the code and submit it all. - fixed see result above
*/

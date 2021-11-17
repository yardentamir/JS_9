// unfixed code
function calcAverage(arr) {
  var sum;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);

//fixed code
function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calcAverage([85, 90, 92]));

// ! questions
/* 
What is wrong with this code?
1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all
*/

// ! answers
/* 
1. line 3
2. i used the terminal debugger, console.log() 
3. you can't add number to an undefined value. you declared a variable without a value so it will be undefined.
4. Fix the code and submit it all. - fixed see result above
*/

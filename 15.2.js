// unfixed code
/*
function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } 
  else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmalest(52, 66, 2));

*/

// fixed code

function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (b > a && c > a) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2));

// ! questions
/* 
What is wrong with this code?
1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.
*/

// ! answers
/* 
1. line 12, 3 and 6
2. i used the terminal debugger, console.log() and spelling extension
3. in line 12 missing "l" we should call the function with the exacts same name
in line 3 the condition should be a > c && b > c because we need to test arguments separately
4. Fix the code and submit it all. - fixed see result above
*/

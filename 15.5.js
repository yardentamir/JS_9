// unfixed code
function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter + 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

//fixed code

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));

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
1. line 6
2. i used the terminal debugger, console.log() 
3. one + is used for calculating and += is used for adding
4. Fix the code and submit it all. - fixed see result above
*/

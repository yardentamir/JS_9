// unfixed code
function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//fixed code
function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

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
1. line 2
2. i used the terminal debugger, console.log() 
3. arrays starts with index = 0 so the counting of indexes will look like this 0, 1, 2 
so the index of the even numbers wll be odd
4. Fix the code and submit it all. - fixed see result above
*/

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
*/

// ! answer
/* 
firstResult: will return the function otherFunction because we returned the name and was'nt calling it
result: will return 5 because firstResult = otherFunction and now we can use it.
*/

function b2() {
  a = 10;
  function a() {}
}
console.log(a);

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
*/

// ! answer
/* 
b2() will return undefined because return; returns nothing.
*/

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 200);
}

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
*/

// ! answer
/* 
will print to the console 3 , 3 , 3 together after 100ms because let declared here as a global variable.
and the loop runs first and then the setTimeout will trigger.
*/

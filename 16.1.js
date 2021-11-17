function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

// ! answer
/* 
in line 2: will be "undefined" because the variable a declared afterwards
in line 3: will be "2" because no matter where you call the function it will run because it's on the same scope or global function
*/

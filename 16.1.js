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

// * answer
/* 
in line 2: will be "undefined" because the variable is declared afterwards,
we can fix it by using the variable 'a' after its declaration.
in line 3: will be "2" because the function declared is global in its scope, so first function declaration.
*/

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

// * answer
/* 
obj.prop.getFullName() - will return the full name of the direct parent (the prop key);
test() - will return undefined because we can't save inner object function as a variable.
*/
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

// * answer
/* 
b = number : because it's a global variable. we declare it like this b = 0. 
a = undefined : because it's a local variable. we declare it like this let a = b;
'use strict' should fix this problem
*/

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

// * answer
/* 
will print "2" two times because the functions declared with the same function name, 
so the first will be equal to the last function. Different name function should fix this problem.
*/

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
  function()
  function()
}
funcD2();
console.log(e);

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

// * answer
/* 
console.log(d)- will print 1 because we created a global variable d and invoked the function before console.log
console.log(e)- will throw an error because var is global only for the functions inside its parent scope(funcD2). 
we can declare e = 1 to fix this problem.
*/

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// ! question
/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

// * answer
/* 
local scope- will print 1 because we declared var before we called the function and var is a global variable so we can use this var in the under scopes too.
global scope- will print undefined because the console.log is called before the variable is declared. 
we can declare f = 1 to fix this problem.
*/

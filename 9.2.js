(function () {
  "use strict";

  const forLoop = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let counter = 0;
      for (let j = 0; j < arr[i].length; j++) counter++;
      newArr[i] = counter;
    }
    return newArr;
  };

  const whileLoop = (arr) => {
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
      let counter = 0;
      for (let j = 0; j < arr[i].length; j++) counter++;
      newArr[i] = counter;
      i++;
    }
    return newArr;
  };

  console.log(forLoop(["boo", "doooo", "hoo", "ro"]));
  console.log(whileLoop(["boo", "doooo", "hoo", "ro"]));

  /* I like the for loop for this solution because i can create the index value inside the loop
   and increase the index by 1 also it is more readable in this case. */
})();

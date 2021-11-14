(function () {
  "use strict";

  const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
  const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

  const foodFunc = (arr, arr1) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr[i] === arr1[j]) {
          newArr.push(arr[i]);
        }
      }
    }
    return newArr;
  };

  console.log(foodFunc(food, food1));
})();

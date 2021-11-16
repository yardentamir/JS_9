(function () {
  "use strict";
  const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

  /* a.1. Sort the array of strings from descending to ascending order
     a.2. Sort the array of strings from ascending to descendingorder.
  */

  const sortAlphabetAdc = () => {
    return foods.sort((a, b) => {
      if (a[0] > b[0]) return 1;
      return -1;
    });
  };

  console.log(sortAlphabetAdc());

  const sortAlphabetDes = () => {
    return foods.sort((a, b) => {
      if (a[0] < b[0]) return 1;
      return -1;
    });
  };

  console.log(sortAlphabetDes());

  /* 
   b.1. Sort the array of strings from descending to ascending order.
    b.2. Sort the array of strings from ascending to descending order.
    */

  const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
  ];

  const sortAlphabetAdcUpper = () => {
    return foodsWithUpperCase.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  };

  console.log(sortAlphabetAdcUpper());

  const sortAlphabetDesUpper = () => {
    return foodsWithUpperCase.sort((a, b) => {
      return b.toLowerCase().localeCompare(a.toLowerCase());
    });
  };

  console.log(sortAlphabetDesUpper());

  /* Longest word */
  const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

  console.log(words.sort((a, b) => a.length - b.length));
  console.log(words.sort((a, b) => b.length - a.length));
})();

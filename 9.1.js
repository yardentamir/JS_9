(function () {
  "use strict";

  const listOfNeighbors = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];

  const showNeighbors = (arr) => {
    for (const innerArr of arr) {
      for (const valueInInnerArr of innerArr) {
        console.log("Neighbor: " + valueInInnerArr);
      }
    }
  };
  showNeighbors(listOfNeighbors);
})();

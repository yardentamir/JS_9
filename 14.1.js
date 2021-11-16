(function () {
  "use strict";
  const nums = [1, 2, 3, 4, 5, 6];

  const max = () =>
    nums.reduce((max, cur) => {
      if (cur > max) return cur;
    });

  const max2 = () =>
    nums.reduce((max, cur) => {
      return Math.max(max, cur);
    });

  console.log(max());
  console.log(max2());

  const even = () =>
    nums.reduce((total, cur) => {
      if (cur % 2 === 0) total += cur;
      return total;
    }, 0);

  console.log(even());

  const avg = () =>
    nums.reduce((total, cur) => {
      return (total += cur);
    });

  console.log(avg());
})();

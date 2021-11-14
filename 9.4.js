(function () {
  "use strict";

  // solution 1 - with repeat
  const steps = (N) => {
    for (let i = 1; i <= N; i++) {
      console.log("#".repeat(i));
    }
  };

  // Ninja solution - without repeat
  const steps2 = (N) => {
    let row = "";
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= i; j++) row += "#";
      console.log(row);
      row = "";
    }
  };

  steps(4);
  steps2(4);
})();

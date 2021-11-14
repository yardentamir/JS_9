(function () {
  "use strict";

  // Without the spaces it also looks good but you asked for it

  // solution 1 - with repeat
  const steps = (N) => {
    for (let i = 1; i <= N; i++) {
      console.log("#".repeat(i) + " ".repeat(N - i));
    }
  };

  // Ninja solution - without repeat
  const steps2 = (N) => {
    for (let i = 1; i <= N; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) row += "#";
      for (let z = N; z >= i; z--) row += " ";
      console.log(row);
    }
  };

  const steps3 = (N) => {
    for (let i = 1; i <= N; i++) {
      let row = "";
      for (let j = 1; j <= N; j++) {
        row += j <= i ? "#" : " ";
      }
      console.log(row);
    }
  };

  steps(4);
  steps2(4);
  steps3(4);
})();

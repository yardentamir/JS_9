(function () {
  "use strict";
  const isString = (str, func) => {
    if (typeof str === "string") {
      func(str, addDashes);
    }
  };

  const logConsole = (str) => {
    console.log(str);
  };

  const firstWordUpperCase = (str, func) => {
    const wordArr = str.split(" ");
    const newArr = [];
    for (const word of wordArr) {
      newArr.push(word[0].toUpperCase() + word.slice(1));
    }
    func(newArr.join(" "), addDot);
  };

  const addDashes = (str, func) => {
    let arrStr = str.split(" ");
    func(arrStr.join("/"), logConsole);
  };

  const addDot = (str, func) => {
    func((str += "."));
  };

  isString("hello my name is yarden", firstWordUpperCase);
  addDashes("hello my name is yarden", addDot);
  addDot("hello my name is yarden", logConsole);
})();

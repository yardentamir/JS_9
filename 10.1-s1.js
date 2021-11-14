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
    func(str.charAt(0).toUpperCase() + str.slice(1), addDot);
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

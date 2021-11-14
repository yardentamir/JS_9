const isString = (str, func) => {
  if (typeof str === "string") {
    func(str);
  }
};

const logConsole = (str) => {
  console.log(str);
};

const firstWordUpperCase = (str, func) => {
  func(str.charAt(0).toUpperCase() + str.slice(1));
};

const addDashes = (str) => {
  let arrStr = str.split(" ");
  console.log(arrStr.join("/"));
};

const addDot = (str, func) => {
  func((str += "."));
};

isString("hello my name is yarden", logConsole);
firstWordUpperCase("how are you?", addDashes);
firstWordUpperCase("hi there", logConsole);
addDot("hello my name is yarden", addDashes);

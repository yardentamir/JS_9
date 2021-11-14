const isString = (str, func) => {
  if (typeof str === "string") {
    func(str);
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
  func(newArr.join(" "));
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

(function () {
  "use strict";

  const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];

  const getNames = (data) => data.map((obj) => obj.name);

  const before1990 = (data) => {
    const arrWithNull = data.map((obj) => {
      const arr = obj.birthday.split("-");
      return arr[arr.length - 1] < 1990 ? obj : "deleteMe";
    });
    const newArr = [];
    arrWithNull.forEach((obj) => {
      if (obj !== "deleteMe") {
        newArr.push(obj);
      }
    });
    return newArr;
  };

  const before1990solution2 = (data) => {
    const newArr = [];
    data.forEach((obj) => {
      const arr = obj.birthday.split("-");
      if (arr[arr.length - 1] < 1990) {
        newArr.push(obj);
      }
    });
    return newArr;
  };

  console.log(getNames(data));
  console.log(before1990(data));
  console.log(before1990solution2(data));
})();

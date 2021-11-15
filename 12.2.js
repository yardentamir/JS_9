(function () {
  "use strict";

  const candyStore = {
    candies: [
      {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2,
      },
      {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4,
      },
    ],
    cashRegister: 200,
  };

  function getCandy(candyStore, id) {
    return candyStore.candies.filter((obj) => obj.id === id);
  }

  function getPrice(candyStore, id) {
    return getCandy(candyStore, id).map((obj) => obj.price);
  }

  function addCandy(candyStore, id, name, price) {
    const obj = {
      name,
      id,
      price,
      amount: 1,
    };
    candyStore.candies.push(obj);
  }

  function buy(candyStore, id) {
    const priceOfNewCandy = getPrice(candyStore, id);
    candyStore.cashRegister += priceOfNewCandy;
    console.log(candyStore.cashRegister);
  }

  console.log(getCandy(candyStore, "5hd7y"));
  console.log(getPrice(candyStore, "5hd7y"));
  addCandy(candyStore, "bc18f", "m&m", 3);
  buy(candyStore, "bc18f");
  console.log(candyStore);
})();

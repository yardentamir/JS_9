(function () {
  "use strict";
  var library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];

  const findReadableBooks = (library) => {
    return library.filter((book) => book.readingStatus === true);
  };

  const titleFirst = (readableBooks) => {
    const result = [];
    readableBooks.forEach((obj) => {
      result.push({
        title: obj.title,
        author: obj.author,
        readingStatus: obj.readingStatus,
      });
    });
    return result;
  };

  console.log(titleFirst(findReadableBooks(library)));
})();

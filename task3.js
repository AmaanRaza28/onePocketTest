const fs = require("fs");

const count = (data) => {
  const words = data.split(/\s+/);
  return words.length;
};

fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(count(data));
  }
});

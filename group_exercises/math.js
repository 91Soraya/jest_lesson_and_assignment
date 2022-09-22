const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => {
  if (y !== 0) {
    return x / y;
  } else {
    throw new Error("Can't divide by 0");
  }
};
module.exports = { add, sub, mult, div };
const sumAll = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    return "ERROR";
  }
  if (x <= 0) {
    return "ERROR";
  }
  let summ = 0;
  for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
    summ += i;
  }

  return summ;
};
// Do not edit below this line
module.exports = sumAll;

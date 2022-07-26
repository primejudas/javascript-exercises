const ftoc = (fahrenheit) => {
  let celToFarh = (fahrenheit - 32) * (5 / 9);
  let result = Math.round(celToFarh * 10) / 10;
  return result;
};
const ctof = (celsius) => {
  let farhToCel = celsius * (9 / 5) + 32;
  let result = Math.round(farhToCel * 10) / 10;
  return result;
};

console.log(ftoc(100))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

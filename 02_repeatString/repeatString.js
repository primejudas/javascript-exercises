const repeatString = function (wordToPrint, numerOfTime) {
  if (numerOfTime < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 1; i <= numerOfTime; i++) {
    result = result + wordToPrint;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;

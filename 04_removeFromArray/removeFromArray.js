const removeFromArray = function (array, ...nums) {
  let result = new Array();
  for (let i = 0; i < array.length; i++) {
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      if (array[i] === nums[j]) {
        found = true;
        break;
        
      }
    }
    if (!found) {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = removeFromArray;

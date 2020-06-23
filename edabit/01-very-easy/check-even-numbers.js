/**
 * Create a function that takes in an array and returns true if all its values are even, and false otherwise.
 *
 * LEVEL: very easy
 */

function checkAllEven(arr) {
  const result = arr.every(x => x % 2 === 0);
  // console.log(result);
  return result;
}

checkAllEven([1, 2, 3, 4]); // false
checkAllEven([2, 4, 6]); // true
checkAllEven([5, 6, 8, 10]); // false
checkAllEven([-2, 2, -2, 2]); // true

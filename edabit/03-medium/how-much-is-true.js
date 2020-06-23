/**
 * Create a function which returns the number of true values there are in an array.
 * LEVEL: medium
 */

function countTrue(arr) {
  const totalTrue = arr.filter(val => val === true);
  // console.log(totalTrue.length);
  return totalTrue.length;
}

countTrue([true, false, false, true, false]); // 2
countTrue([false, false, false, false]); // 0
countTrue([]); // 0

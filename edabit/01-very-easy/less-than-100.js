/**
 * Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
 *
 * LEVEL: very easy
 */

function lessThan100(a, b) {
  const sum = a + b;

  return sum < 100 ? true : false;
}

lessThan100(22, 15); // true
// 22 + 15 = 37

lessThan100(83, 34); // false
// 83 + 34 = 117

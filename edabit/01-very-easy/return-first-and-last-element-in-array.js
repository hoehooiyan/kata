/**
 * Create a function that takes an array of numbers and return the first and last elements as a new array.
 *
 * LEVEL: very easy
 */

function firstLast(arr) {
  const firstEl = arr[0];
  const lastEl = arr[arr.length - 1];
  // console.log([firstEl, lastEl]);
  return [firstEl, lastEl];
}

firstLast([5, 10, 15, 20, 25]); // [5, 25]

firstLast(['edabit', 13, null, false, true]); // ["edabit", true]

firstLast([undefined, 4, '6', 'hello', null]); // [undefined, null]

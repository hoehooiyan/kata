/**
 * Create a regular expression to check whether the given string is a valid floating numeric character or not.
 * LEVEL: medium
 */

function isFloatingCharacter(num) {
  const regex = /^(\-|\.|\d*)\d*\.\d+$/;
  // console.log(regex.test(num));
  return regex.test(num);
}

isFloatingCharacter('12.12'); // true
isFloatingCharacter('12.'); // false
isFloatingCharacter('.1'); // true
isFloatingCharacter('-.1'); // true
isFloatingCharacter('abc'); // false

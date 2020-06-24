/**
 * Create a function that takes a string and returns a string with its letters in alphabetical order.
 *
 * LEVEL: very easy
 */

function AlphabetSoup(str) {
  const strArr = str.split('');

  // console.log(strArr.sort().join(''));
  return strArr.sort().join('');
}

AlphabetSoup('hello'); // "ehllo"
AlphabetSoup('edabit'); // "abdeit"
AlphabetSoup('hacker'); // "acehkr"
AlphabetSoup('geek'); // "eegk"
AlphabetSoup('javascript'); // "aacijprstv"

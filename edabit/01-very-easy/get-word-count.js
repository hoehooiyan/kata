/**
 * Create a function that takes a string and returns the word count. The string will be a sentence.
 * LEVEL: very easy
 */

function countWords(str) {
  const strArr = str.split(' ');
  // console.log(strArr.length);
  return strArr.length;
}

countWords('Just an example here move along'); // 6
countWords('This is a test'); // 4
countWords('What an easy task, right'); // 5

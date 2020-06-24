//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  const strArray = str.split('');
  const newStrArray = [];

  for (let i = strArray.length - 1; i >= 0; i--) {
    newStrArray.push(strArray[i]);
  }

  return newStrArray.join('');
};
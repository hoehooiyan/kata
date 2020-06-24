//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = ([color1, color2]) => {
  const first = COLORS.indexOf(color1).toString();
  const second = COLORS.indexOf(color2).toString();

  return Number(first + second);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
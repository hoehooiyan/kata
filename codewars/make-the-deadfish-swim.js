// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters
function parse(data) {
  const inputData = data.split('');
  const valid = inputData.filter(
    (input) => input === 'i' || input === 'd' || input === 's' || input === 'o'
  );

  let result = 0;
  const output = [];

  valid.forEach(
    (val) => {
      if (val === 'i') {
        return result++;
      }
      if (val === 'd') {
        return result--;
      }
      if (val === 's') {
        result = result * result;
        return result;
      }
      if (val === 'o') {
        output.push(result);
      }
    }
  );
  return output;
}

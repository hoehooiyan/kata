/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

LEVEL: 7 kyu
 */

function validatePIN(pin) {
  const regex = /^(\d{4}|\d{6})$/;
  // console.log(regex.test(pin));
  return regex.test(pin);
}

validatePIN('1234'); // true;
validatePIN('12345'); // false;
validatePIN('a234'); // false;

/**
 * Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.
 *
 * LEVEL: easy
 */

function matchHouses(step) {
  if (step === 0) {
    // console.log(0);
    return 0;
  } else if (step === 1) {
    // console.log(6);
    return 6;
  } else if (step > 1) {
    const minimum = 6;
    const rawResult = minimum * step;
    const finalResult = rawResult - (step - 1);
    // console.log(finalResult);
    return finalResult;
  } else {
    // console.log('error');
    return 'Invalid step';
  }
}

matchHouses(1); // 6
matchHouses(4); // 21
matchHouses(87); // 436
matchHouses(-1); // error

/**
 * Write a function that converts hours into seconds.
 *
 * LEVEL: very easy
 */

function howManySeconds(hours) {
  const secondInMin = 60;
  const minInHour = 60;
  return hours * secondInMin * secondInMin;
}

howManySeconds(2); //  7200
howManySeconds(10); // 36000
howManySeconds(24); // 86400

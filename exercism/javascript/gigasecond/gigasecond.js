//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (givenDate) => {

  /**
   * JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds
   */

  const gigaSec = 1e9;

  return new Date(givenDate.getTime() + (gigaSec * 1000));
};
/**
 * Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.
 *
 * LEVEL: very easy
 */

function footballPoints(wins, draws, losses) {
  const winPoint = 3;
  const drawPoint = 1;
  const lossPoint = 0;
  return ((wins * winPoint) + (draws * drawPoint) + (losses * lossPoint))
}

footballPoints(3, 4, 2); // 13
footballPoints(5, 0, 2); // 15
footballPoints(0, 0, 1); // 0

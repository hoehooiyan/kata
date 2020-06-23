/**
 * Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.
 * LEVEL: very easy
 */

function getFillings(sandwich) {
  const firstItem = sandwich[1];
  const lastItem = sandwich[sandwich.length - 1];

  // remove the first item from the array
  sandwich.shift(firstItem);

  // remove the last item from the array
  sandwich.pop(lastItem);

  // console.log(sandwich);
  return sandwich;
}

getFillings(['bread', 'ham', 'cheese', 'ham', 'bread']); // ["ham", "cheese", "ham"]
getFillings(['bread', 'sausage', 'tomato', 'bread']); // ["sausage", "tomato"]
getFillings(['bread', 'lettuce', 'bacon', 'tomato', 'bread']); // ["lettuce", "bacon", "tomato"]

/**
 * Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
 *
 * LEVEL: very easy
 */

function numberSyllables(word) {
  // split out the word
  const syllables = word.split('-');
  return syllables.length;
}

numberSyllables('buf-fet'); // 2
numberSyllables('beau-ti-ful'); // 3
numberSyllables('mon-u-men-tal'); // 4
numberSyllables('on-o-mat-o-poe-ia'); // 6

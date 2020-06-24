//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {
  const TRANSCRIPTION_MAP = {
    'A': 'U',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  };

  return DNA.replace(/[ATCG]/g, i => TRANSCRIPTION_MAP[i]);
};

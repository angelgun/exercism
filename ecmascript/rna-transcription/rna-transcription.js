function getComplement(nucleotide) {
  const translations = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  return translations[nucleotide];
}

function isValidDNA(strandChar) {
  const validDNAChars = 'GCTA';
  return validDNAChars.includes(strandChar);
}

class Transcriptor {
  toRna(strand) {
    return Array.from(strand).reduce((result, nucleotide) => {
      if (!isValidDNA(nucleotide)) throw new Error('Invalid input DNA.');
      return result + getComplement(nucleotide);
    }, '');
  }
}

export default Transcriptor;

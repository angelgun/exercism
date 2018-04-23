class Hamming {
  compute(strand1, strand2) {
    const len1 = strand1.length;
    const len2 = strand2.length;

    if (len1 !== len2) {
      throw new Error('DNA strands must be of equal length.');
    }

    let distance = 0;
    let index = -1;
    const end = len1;
    while(++index < end) {
      if (strand1[index] !== strand2[index]) {
        distance++;
      }
    }
    return distance;
  }
}

export default Hamming;

class PrimeFactors {
  for (number) {
    let factor = 2;
    const factors = [];

    while (number > 1) {
      while (number % factor !== 0) {
        factor += factor === 2 ? 1 : 2;
      }

      number /= factor;
      factors.push(factor);
    }

    return factors;
  }
}

export default PrimeFactors;

/**
 * 1time
 */

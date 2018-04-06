// function isPrime(number) {
//   for (let i = 2, end = Math.floor(Math.sqrt(number)); i <= end; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }

// function nextPrime(number) {
//   while (true) {
//     number += 1;
//     if (isPrime(number)) return number;
//   }
// }

class PrimeFactors {
  for(number) {
    let factor = 2;
    const factors = [];

    while (number > 1) {
      if (number % factor === 0) {
        factors.push(factor);
        number /= factor;
        factor = 2;
      } else {
        factor = factor === 2 ? 3 : factor + 2;
        // factor = nextPrime(number);
      }
    }

    return factors;
  }
}

export default PrimeFactors;

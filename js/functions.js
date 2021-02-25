function findPrimeSquare(num) {
    if (num < 1) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

function searchingSqr(sqr) {
    let primeSquare = [];
    for (var isqr = sqr; isqr > 1; isqr--) {
      if (findPrimeSquare(isqr)) {
        primeSquare.push(isqr);
      }
    }
    return primeSquare;
  }

  module.exports = { searchingSqr, findPrimeSquare}
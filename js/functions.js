findPrimeSquare = num => {
    if (num < 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

searchingSqr = sqr => {
    let primeSquare = [];
    for (let isqr = parseInt(Math.sqrt(sqr)); isqr > 1; isqr--) {
      if (findPrimeSquare(isqr)) {
        primeSquare.push(isqr);
      }
    }
    return primeSquare;
  }

validateValue = req => (req.params.number > 2) ? true : false;

principalFunction = (req, res) => {
    try {
        let valida = validateValue(req);
        if(!valida){
            res.status(400).json({ message: 'the value is not valid' })
            return;
        }
       const response =  newPrimeSqr(req.params.number)
    
       if(response.length > 0){
        res.status(200).json({ data: response});
       }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

newPrimeSqr = number => {
    let primeBySqr = [];
    let finale = [];
    let noBecount = 0;

    for (let index = parseInt(number); index > 1; index--) {
      primeBySqr = searchingSqr(index);
      for (let indexSqrPrime = 0; indexSqrPrime < primeBySqr.length; indexSqrPrime++) {
        if (index % primeBySqr[indexSqrPrime] === 0) {
          noBecount++;
        }
      }
      if (noBecount > 0) {
        noBecount = 0;
      } else {
        finale.push(index);
      }
    }
    return finale;
  }

  module.exports = { searchingSqr, findPrimeSquare, validateValue, newPrimeSqr, principalFunction}
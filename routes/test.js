const express = require('express');
const router = express.Router();

    router.get('/:number', validateValue, newPrimeSqr, (req, res) =>{
        res.status(200).json({ data: res.prime});
})

function validateValue(req, res, next){
   (req.params.number > 0) ? next() : res.status(400).json({ message: 'the value is not valid' });
}

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

function newPrimeSqr(req, res, next) {
    let primeBySqr = [];
    let finale = [];
    let noBecount = 0;
    for (var index = parseInt(req.params.number); index > 1; index--) {
      primeBySqr = searchingSqr(parseInt(Math.sqrt(index)));
      for (var indexSqrPrime = 0; indexSqrPrime < primeBySqr.length; indexSqrPrime++) {
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
    res.prime = finale;
    next();
  }

module.exports = router;
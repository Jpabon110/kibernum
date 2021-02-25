const express = require('express');
const router = express.Router();

router.get('/:number', validateValue, fillArrayValues, verify, (req, res) =>{
    res.json({ data: res.prime});
})

function validateValue(req, res, next){
   (req.params.number > 0) ? next() : res.status(400).json({ message: 'the value is not valid' });
}

function fillArrayValues(req, res, next){
    if(!res.vector && !res.index){
        res.vector = [];
        res.index = parseInt(req.params.number);
    }
    res.vector.push(res.index);
    (res.index < 2) ? (res.valueArray = res.vector,  next()) : (res.index--, fillArrayValues(req, res, next));
}

function verify(req, res, next){
    const prime = [];
    for(var index = 0; index < res.valueArray.length; index++){
        if(primo(res.valueArray[index])){
            prime.push(res.valueArray[index])
        }
    }
    res.prime = prime;
    next();
}

function primo(num) {
    for (var find = 2; find < num; find++) {
        if(num%find==0){
            return false;
        }
    }
    return true;
}

module.exports = router;
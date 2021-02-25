const express = require('express');
const router = express.Router();

router.get('/:id', validateValue, fillArrayValues, verify, (req, res) =>{
    // res.send('data set on array' + req.params.id);
    res.json({ data: res.prime});
    // console.log(res.prime);

})

function validateValue(req, res, next){
   (req.params.id > 0) ? next() : res.status(400).json({ message: 'the value is not valid' });
}

function fillArrayValues(req, res, next){
    if(!res.vector && !res.index){
        res.vector = [];
        res.index = parseInt(req.params.id);
    }
    res.vector.push(res.index);
    (res.index < 2) ? (res.valueArray = res.vector,  next()) : (res.index--, fillArrayValues(req, res, next));
}

function verify(req, res, next){
    const prime = [];
    for(var i = 0; i < res.valueArray.length; i++){
        if(primo(res.valueArray[i])){
            prime.push(res.valueArray[i])
        }
    }
    res.prime = prime;
    next();
}

function primo(num) {
    for (var i = 2; i < num; i++) {
        if(num%i==0){
            return false;
        }
    }
    return true;
}


module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/:id', validateValue, fillArrayValues, (req, res) =>{
    res.send('data set on array');
    console.log(res.valueArray);
})

function validateValue(req, res, next){
   (req.params.id > 1) ? next() : res.status(400).json({ message: 'the value is not valid' });
}

function fillArrayValues(req, res, next){
    if(!res.vector){
        res.vector = [];
    }

    res.vector.push(parseInt(req.params.id));

    (req.params.id < 2) ? (res.valueArray = res.vector,  next()) : (req.params.id--, fillArrayValues(req, res, next));
}

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) =>{
    res.send('Parameter ' + req.params.id)
})

module.exports = router;
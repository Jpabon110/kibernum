const express = require('express');
const router = express.Router();
const {
  principalFunction,
} = require('../js/functions')

router.get('/:number', principalFunction);


module.exports = router;
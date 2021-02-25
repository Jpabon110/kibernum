const express = require('express');
const app = express();


const testRouter = require('./routes/primos')
app.use('/primos', testRouter)

app.listen(3000, () => console.log('Server start'))
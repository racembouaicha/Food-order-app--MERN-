require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const productRouter = require('./routes/Product')


const app = express()

// middleware
app.use(express.json())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})
app.use('/product', productRouter)


// connect to db   
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

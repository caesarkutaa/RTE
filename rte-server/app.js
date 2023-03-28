//build dependencies
const cors = require('cors')
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//connect database
require('./DB/db').connect();

//local dependencies
const adminRouter = require('./routes/admin.routes');

app.use(express.json())
app.use(cors())
// routes
app.use('/admin',adminRouter);


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})


const port = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });



app.listen(port,  (req, res, next)=> {
    console.log(`server running on port ${port}`);
})
// requring the express file
const express = require('express');
const port= 8000;
const app = express();

// adding mongoose file to run database
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use('/' ,require('./routes'));
app.use(express.static('assets'));
const addWork = require('./controllers/add_work');

// setting up the view engine
app.set('view engine' , 'ejs');
app.set('views', './views');

// checking if server runs properly or have an error
app.listen(process.env.PORT ,function(err){
    if(err){
        console.log(`An error occured ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
})
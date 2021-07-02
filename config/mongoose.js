// requring the mongoose file
const mongoose = require('mongoose');

// establishing the connection with mongoose

mongoose.connect(`${process.env.TodoDB}`,{useNewUrlParser: true});
var db = mongoose.connection;

// if error 
db.on('error', console.error.bind(console , 'error in connecting'));

// if connection is build successfuly
db.once('open',function(){
    console.log('successfuly connected to the database!');
})
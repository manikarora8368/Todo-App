// requring the mongoose file
const mongoose = require('mongoose');

// establishing the connection with mongoose
// mongoose.connect('mongodb://localhost/todo_list');

mongoose.connect(`mongodb+srv://Manik:${encodeURIComponent('Manik@1204')}@todoapp.njirc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser: true});
var db = mongoose.connection;

// if error 
db.on('error', console.error.bind(console , 'error in connecting'));

// if connection is build successfuly
db.once('open',function(){
    console.log('successfuly connected to the database!');
})
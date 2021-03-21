// adding the mongoose file
const mongoose = require('mongoose');

// defining the database schema
const workSchema = new mongoose.Schema({
    description:{
        type: String , 
        required : true
    },
    category:{
        type: String ,
        required: true
    },
    date:{
        type: String ,
        required : true
    }
})

const Work = mongoose.model('Work',workSchema);
module.exports = Work;
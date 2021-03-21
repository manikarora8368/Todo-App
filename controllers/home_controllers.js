const Work = require('../models/work');

// defining the function for home controller
module.exports.home = function(req , res){
    Work.find({},function(err,work){
        if(err){
            console.log(err);
            return;
        }
        return res.render('home',{
            addWork : work
        })
    })
}


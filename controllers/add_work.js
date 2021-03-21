const Work = require('../models/work');

// creating the function to add a task
module.exports.work = function(req,res){
    Work.create({
        description : req.body.description,
        category : req.body.category,
        date : req.body.date
    },function(err , newWork){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    })
}

// creating the function to delete a task
module.exports.deleteWork = function(req,res){
    let id = req.params.id;
    Work.deleteOne({_id :id}, function(err){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    })
}

const tasks=require('../Models/Task');
module.exports.get=function(req,res){
    tasks.find({}).then((p)=>{
        res.render('Home',{
            Tasks:p
        });   
    })
    
}

module.exports.task=async function(req,res){
    const task=req.query.Task;
   await tasks.create({
        Task:task
    }).then(()=>{
        res.redirect('/');
    })

}
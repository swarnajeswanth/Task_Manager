const mongoose=require('mongoose');

const Task=new mongoose.Schema({
    Task:{
        type:String,
        require:[true,"Task Field can't be Empty"]
    },
    completed:{
        type:Boolean,
        default:false
    }
});

const Task_Array=mongoose.model('Task',Task);

module.exports=Task_Array;
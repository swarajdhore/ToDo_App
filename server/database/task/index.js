import mongoose from 'mongoose';
const TaskSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref:"Users"
    },
    tasks: [{
        taskname: {type:String, required:true},
        taskdesc: {type:String, required:true},
        status: {type:String, enum:['Pending','Completed','On-Hold'], default: 'Pending'},
        time: {type:Date,required:true},
    }]
},{
    timestamps:true
});

export const TaskModel = mongoose.model("Tasks", TaskSchema);
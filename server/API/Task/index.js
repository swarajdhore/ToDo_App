import express from "express";
import passport from "passport";
import mongoose from "mongoose";

import {TaskModel} from '../../database/allModels';
//var ObjectId = require('mongodb').ObjectID;
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectId = require('mongodb').ObjectId,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    //BSON = require('mongodb').pure().BSON,
    assert = require('assert');


const Router = express.Router();

/*
Route      /:_id
Desc       get all today's task
Params     None
Access     Public
Method     GET
*/

Router.get("/:_id", passport.authenticate('jwt', {session:false}) ,async(req,res) => {
    try{
        //const {taskname} = req.query;
        const {_id} = req.params;
        const taskname = await TaskModel.findOne({user:_id});
        if(!taskname){
            return res.status(404).json({error:"No tasks found !!"});
        }
        return res.status(200).json({tasks:taskname});
    } catch (error){
        return res.status(500).json({error: error.message})
    }
})

/*
Route      /new/:_id
Desc       get all today's task
Params     None
Access     Public
Method     POST
*/
Router.post('/new/:_id',passport.authenticate('jwt', {session:false}) ,async (req,res) => {
    try{
        const{_id} = req.params;
        const{tasks}= req.body;
        const addNewTask = await TaskModel.findOneAndUpdate({
            user:_id
        },{
            $push: {tasks},     // or can be written as $push: {tasks: tasks} as both key and value name are same hence written only single word
        },
        {
            new: true    //it means whatever object we return should be returned after updation
        }
        );
        console.log(addNewTask);
        if (!addNewTask) {
            const details = await TaskModel.create({
              user: _id,
              tasks: [tasks],
            });
            console.log(details);
            return res.json({ task: details });
          }

        return res.json({task:addNewTask});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})


/*
Route      /update/:_id
Desc       get all today's task
Params     None
Access     Public
Method     POST
*/
Router.post('/update/:_id',passport.authenticate('jwt', {session:false}) ,async (req,res) => {
    try{
        const{_id} = req.params;
        const{tasks, userid}= req.body;
        // console.log("line91");
        // console.log(tasks);
        // const updateTask = await TaskModel.findOneAndUpdate({
        //     user:_id
        // },{
        //     $push: {tasks},     // or can be written as $push: {tasks: tasks} as both key and value name are same hence written only single word
        // },
        // {
        //     new: true    //it means whatever object we return should be returned after updation
        // }
        // );
        // console.log(updateTask);
        console.log(userid);
        console.log(_id);
        console.log(tasks);
        //console.log(tasks.status)
        //const updateTask = await TaskModel.updateOne({user:userid},{$pull:{tasks:{_id:_id}}})
        //const updateTask = await TaskModel.updateOne({user:userid},{$set:{tasks:{status:`${tasks.status}`}}})
        // const updateTask = await TaskModel.aggregate(
        //     [
        //         {$unwind:"$tasks"},
        //         {$match:{"tasks.status": {$strcasecmp:["$tasks.status",tasks.status]}}},
        //         {$replaceWith:}
        //     ]
        //     )

        //console.log("Hello1")
        //console.log(updateTask);
        //console.log("Hello2")
        //const TasksUpdated = await TaskModel.updateOne({user:userid},{$pull:{tasks:{_id:_id}}})
        //console.log("Hello3")
        //console.log(TasksUpdated);
        //console.log("Hello4")
        // const TasksUpdated1 = await TaskModel.findOneAndReplace({
        //     tasks:_id
        // },{
        //     tasks,     // or can be written as $push: {tasks: tasks} as both key and value name are same hence written only single word
        // },
        // {
        //     new: true    //it means whatever object we return should be returned after updation
        // }
        // );
        const deleteTask = await TaskModel.updateOne({user:userid},{$pull:{tasks:{_id:_id}}})
        console.log(deleteTask)
        const updateTask = await TaskModel.findOneAndUpdate({
            user:userid
        },{
            $push: {tasks},     // or can be written as $push: {tasks: tasks} as both key and value name are same hence written only single word
        },
        {
            new: true    //it means whatever object we return should be returned after updation
        }
        );
        console.log(updateTask);
        

        return res.json({task:updateTask});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})




Router.delete('/delete/:_id',passport.authenticate('jwt', {session:false}) ,async (req,res) => {
    try{
        const {_id} = req.params;
        
        var y = _id.toString(16)
        console.log(_id)
        console.log(_id.length)
        const id = JSON.stringify(_id)
        const {tasks} = req.body;
        console.log(tasks)
        //console.log(x);
        //const userid = x.user;
        //console.log(x.user)
        //console.log(x.tasks)
        //var taskList = x.tasks
        //console.log(taskList)
        // const keys = Object.keys(taskList[(taskList.length)-1]);
        // const idvalue = taskList[(taskList.length)-1][keys[4]];
        // console.log(idvalue)
        //const result = TaskModel.findByIdAndDelete({tasks:{_id:id}})
        //console.log("Heelllll"+result)
        console.log({tasks:{_id:_id}})
        // const deleteTask = await TaskModel.findOneAndUpdate({
        //     tasks:{_id:_id}
            
        // },{
        //     $pull: {tasks},     // or can be written as $push: {tasks: tasks} as both key and value name are same hence written only single word
        // },
        // {
        //     new: true    //it means whatever object we return should be returned after updation
        // }
        // );
        //const deleteTask = await TaskModel.deleteOne({'tasks._id':_id},{new:true})
        const deleteTask = await TaskModel.updateOne({user:tasks},{$pull:{tasks:{_id:_id}}})
        console.log(deleteTask);
        const TasksUpdated = await TaskModel.find({},{new:true})
        console.log(TasksUpdated);
        return res.send(TasksUpdated);
        } catch(error){
        console.log(error)
        return res.status(500).json({error: error.message});
        }
})



export default Router;
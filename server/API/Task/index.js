import express from "express";
import passport from "passport";
import mongoose, { ObjectID } from "mongoose";
import {TaskModel} from '../../database/allModels';
var ObjectId = require('mongodb').ObjectID;

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


Router.delete('/delete/:_id',passport.authenticate('jwt', {session:false}) ,async (req,res) => {
    try{
        const _id = req.params._id;
        
        var y = _id.toString(16)
        console.log(y.length)
        const id = JSON.stringify(_id)
        const x = req.body;
        console.log(x);
        const userid = x.user;
        // var item = db.collection.findOne({'condition':'some condition'})
         //const x = await TaskModel.collection.findOneAndDelete.tasks[_id];
        // x.collection.remove({_id: _id});
        // const result = await client.db("ToDo_App").collection("tasks")
        //     .f({ _id: _id });
        //const x = await TaskModel.deleteOne({_id: _id});
        // database.collection("tasks").deleteOne({_id: _id}, (err) => {
        //     if (err) {
        //        console.log(err);                
        //     }
        //     else{
        //         res.send("Deleted");
        //     }
        // })
        // TaskModel.findby(_id, function(err){
        //     if (err) {
        //         console.log(err);
        //     }
        //     else{
        //         console.log("Deleted");
        //     }
        // })
        console.log(x.user)
        const result = await TaskModel.findByIdAndDelete({tasks:{_id:id}})
        console.log(result)
        return res.send(result);
    }catch(error){
        console.log(error)
        return res.status(500).json({error: error.message});
    }
})



export default Router;
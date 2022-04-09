import express from "express";
import passport from "passport";

import {TaskModel} from '../../database/allModels';

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
        const addNewTask = await Order.findOneAndUpdate({
            user:_id
        },{
            $push: {tasks},     // or can be written as $push: {tasks: tasks} as both key and value name are same hence written only single word
        },
        {
            new: true    //it means whatever object we return should be returned after updation
        }
        );
        return res.json({task:addNewTask});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})

export default Router;

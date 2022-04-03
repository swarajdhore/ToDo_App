import express from 'express';
const TodoApp = express();
const database = require("./database")


TodoApp.get("/", (request,response)=>{
    response.json({message:"Request Served !!"});
});

TodoApp.get("/home",(req,res)=>{
    res.json({task:database.task})
});

//OurApp.post("/signup", aync(req,res) =>{
    // try{
    //     const {userid, password}
    // } catch (error){
    //     return res.status(500).json({error:error.message});
    // }
//});

TodoApp.listen(4000,()=> console.log("Server is running"));

//Library
import express from 'express';
import passport from "passport";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Models
import {UserModel, TaskModel} from '../../database/allModels';

//validation
import {ValidateSignup, ValidateLogin} from "../../validation/auth";

const Router = express.Router();

/*
Route      /auth/signup
Desc       Register
Params     None
Access     Public
Method     POST
*/


Router.post("/signup",async (req,res) =>{
    try{
        await ValidateSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
        // save to database
        const newUser = await UserModel.create(req.body.credentials);
        console.log(newUser);
        const token = newUser.generateJwtToken();
        const id = newUser._id;
        return res.status(200).json({token,id, status:"success"});
     } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route      /auth/login
Desc       Login
Params     None
Access     Public
Method     POST
*/
Router.post('/login', async(req,res) =>{
    try{
        await ValidateLogin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        const id = user._id;
        return res.status(200).json({token,id, status:"success"});

    } catch(error){
        return res.status(500).json({error:error.message});
    }
})

export default Router;
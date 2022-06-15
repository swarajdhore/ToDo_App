//Library
import express from 'express';
import passport from "passport";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Models
import {UserModel, TaskModel} from '../../database/allModels';

//validation
import {ValidateSignup, ValidateLogin} from "../../validation/auth";
//import { googleAuth } from '../../../client/src/Redux/Reducer/Auth/auth.action';

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
        
        const validation = await ValidateLogin(req.body.credentials);
        
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        const id = user._id;
        return res.status(200).json({token,id, status:"success"});

    } catch(error){
        return res.status(500).json({error:error.message});
    }
})

/*
Route           /auth/google
Desc            route for google authentication
Params          none
Access          Public
Method          GET
*/
Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
);

/*
Route           /auth/callback
Desc            google callback function
Params          none
Access          Public
Method          GET
*/
Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
       try{
         var token = req.session.passport.user.token;
         var id = req.session.passport.user.user._id;
         var tokenbody = {token,id}
      // return (res.status(200).json({token,id}
      //   )
      // );
      return res.redirect(
        `http://localhost:3000/google/${token}/${id}`
      );
      //(
        //  `http://localhost:3000/google/${req.session.passport.user.user._id}`
        //  //`http://localhost:3000/`
        // //{token:req.session.passport.user.token}
      //);
       }
       catch(error){
        return res.status(500).json({error:error.message});
    }
    }
);

export default Router;
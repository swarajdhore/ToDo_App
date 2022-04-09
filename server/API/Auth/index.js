//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user/index";
import { TaskModel } from "../../database/task/index";

const Router = express.Router();

/*
Route      /auth/signup
Desc       Register
Params     None
Access     Public
Method     POST
*/
Router.post("/signup", async (req, res) => {
  try {
    await UserModel.findByEmailAndPhone(req.body.credentials);

    // save to database
    const newUser = await UserModel.create(req.body.credentials);

    const token = newUser.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route      /auth/login
Desc       Login
Params     None
Access     Public
Method     POST
*/
Router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;

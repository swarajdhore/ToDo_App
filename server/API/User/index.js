import express from "express";
import passport from "passport";

import {UserModel} from '../../database/allModels';

const Router = express.Router();

/*
Route           /
Des             Get user data
Params          null
Access          Public
Method          GET
*/
Router.get("/", passport.authenticate("jwt"), (req, res) => {
    try {
      const { email, fullName, phoneNumber} =
        req.session.passport.user._doc;
  
      return res.status(200).json({ user: { email, fullName, phoneNumber} });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


/*
Route      /:_id
Desc       get all today's task
Params     None
Access     Public
Method     GET
*/
Router.get("/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
  
      const getUser = await UserModel.findById(_id);
  
      if (!getUser) return res.status(400).json({ user: "User not found" });
      const { fullName } = getUser;
  
      return res.json({ user: { fullName } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;
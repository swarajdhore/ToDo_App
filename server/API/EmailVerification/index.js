//Library
import express from "express";
var path = require("path");
import passport from "passport";
//Models
import { UserModel } from "../../database/allModels";

const Router = express.Router();

Router.get(
  "/:id/:token",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.params;
      const getUser = await UserModel.findById(id);
      console.log(getUser);
      var updatedVerify = await UserModel.updateOne(
        { _id: id },
        { $set: { verified: true } }
      );
      console.log(updatedVerify);
      return res.status(200).json(updatedVerify);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
);

export default Router;

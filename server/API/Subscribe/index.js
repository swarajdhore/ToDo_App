import express from "express";
import passport from "passport";

import { SubscribeModel } from "../../database/allModels";

const Router = express.Router();


Router.get(
    "/:_id",
    async (req, res) => {
        try {
          const { _id } = req.params;
         
          const addNewEmail = await SubscribeModel.findOne(
            {
              email: _id,
            },
            {
              new: true, //it means whatever object we return should be returned after updation
            }
          );
          console.log(addNewEmail);
          if (!addNewEmail) {
            const email = await SubscribeModel.create({
             email: _id,
              
            },
            {
              new: true, //it means whatever object we return should be returned after updation
            });
            console.log(email);
            return res.json({ email: email });
          }
    
          return res.json({ email: addNewEmail });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      }
  );
  export default Router;
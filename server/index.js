require("dotenv").config();
<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';

//configs
import routerConfig from './config/route.config';

//Routes
import Auth from './API/Auth/index'
import Task from './API/Task/index'

//Database Connection
import ConnectDB from './database/connection'
//import routeConfig from './config/route.config';
=======
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Routes
import Auth from "./API/Auth/index.js";

//Database Connection
import ConnectDB from "./database/connection.js";
>>>>>>> fc8a49abd73369f7f344c83f329b83b1804e4986

const TodoApp = express();

//passport config
routerConfig(passport);

TodoApp.use(express.json());
TodoApp.use(express.urlencoded({ extended: false }));
TodoApp.use(cors());
TodoApp.use(helmet());
TodoApp.use(passport.initialize());
//TodoApp.use(passport.session());



TodoApp.get("/", (request, response) => {
  response.json({ message: "Request Served !!" });
});

TodoApp.use("/auth", Auth);
TodoApp.use("/task", Task);
// TodoApp.get("/home",(req,res)=>{
//     res.json({task:database.task})
// });

TodoApp.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>
      console.log("Server is running but database connection failed")
    )
);

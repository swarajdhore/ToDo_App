require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Routes
import Auth from "./API/Auth/index.js";

//Database Connection
import ConnectDB from "./database/connection.js";

const TodoApp = express();
//const database = require("./database")

TodoApp.use(express.json());
TodoApp.use(express.urlencoded({ extended: false }));
TodoApp.use(cors());
TodoApp.use(helmet());

TodoApp.get("/", (request, response) => {
  response.json({ message: "Request Served !!" });
});

TodoApp.use("/auth", Auth);
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

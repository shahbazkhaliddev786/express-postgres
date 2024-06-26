const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route.js");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("public")); 

// routes
app.use("/user", userRouter);

app.get("/", (req,res)=>{
    res.send({message: "Server Started"});
});

module.exports = app;
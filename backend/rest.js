const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mrugendrashilvant16:4sf1RqPBT1vYUPiX@cluster0.km61tdu.mongodb.net/blogData")
.then(()=>{
    console.log("MongoDB Connection Success");
})
.catch((err)=>{
    console.log("MongoDB Connection Failed!");
    throw new Error(err);
});

const app = express();
const BlogModel = require("./schema");

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
    next();
})

app.get("/get-blogs",(req, res, next)=>{
    BlogModel.find()
    .then((data)=>{
        res.status(200).json({data: data});
    })
    .catch((err)=> {
        res.status(500).json({message: "Something went wrong!"})
    })
})

module.exports = app;
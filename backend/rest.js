const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mrugendrashilvant16:4sf1RqPBT1vYUPiX@cluster0.km61tdu.mongodb.net/blogData")
.then(()=>{
    console.log("MongoDB Connection Success");
})
.catch((err)=>{
    console.log("MongoDB Connection Failed!");
    throw new Error(err);
})

const app = express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
    next();
})

app.use("/get-blogs",(req, res, next)=>{
    res.json({
        "data": [{
            id: 1,
            title: "Title",
            blog: "This is blog for the Title"
        }]
    })
})

module.exports = app;
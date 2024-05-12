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
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
const BlogModel = require("./schema");

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
    next();
})

app.get("/blogs",(req, res, next)=>{
    BlogModel.find()
    .then((data)=>{
        res.status(200).json({data: data});
    })
    .catch((err)=> {
        res.status(500).json({message: "Something went wrong!"})
    })
})

app.post("/blogs", async(req,res)=>{
    try{
        const blog = new BlogModel({
            title: req.body.title,
            blogContent: req.body.blogContent,
            image: req.body.image,
            hashTags: req.body.hashTags,
            likes: 0,
            created: new Date()
        })
        await blog.save();
        res.status(200).json(blog);
    }
    catch {
        res.status(500).json({message: "Something went wrong!"})
    }
})

app.get("/blogs/:id", (req, res)=>{
    BlogModel.findOne({_id: req.params.id})
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).json({message: "Something went wrong!"})
        throw new Error(err);
    })
})

module.exports = app;
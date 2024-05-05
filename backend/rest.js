const express = require("express");

const app = express();

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
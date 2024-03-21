const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session  = require("express-session");
require('dotenv').config();
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}))

app.use("/user",userRouter);
app.use("/blog",blogRouter);

app.get('/',(req,res)=>{
    res.status(500).json({message: "hello"})
})


mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`mongodb connected successfully`);
    })
})

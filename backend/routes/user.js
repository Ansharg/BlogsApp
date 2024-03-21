const express = require('express');
const userRouter = express.Router();

const {createUser,getUser,forgotPassword,Login, logOut } = require('../controllers/user');

userRouter.get("/user", getUser);
userRouter.post("/create-user", createUser);
userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/login', Login);
userRouter.post('/logout', logOut);

module.exports = userRouter;
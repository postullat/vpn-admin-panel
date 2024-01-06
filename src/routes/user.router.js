const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const userController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);

//userRouter.get('/:id', userController.getUserById);

userRouter.post('/', userController.createUser);


module.exports = userRouter;

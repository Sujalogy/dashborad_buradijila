const express = require('express');

const { loginUser } = require('../controller/login.controller');

const loginRouter = express.Router();

loginRouter.post("/", loginUser);
loginRouter.get("/", loginUser);

module.exports = {
    loginRouter
}
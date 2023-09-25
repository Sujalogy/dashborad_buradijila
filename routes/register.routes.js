const express = require('express');

const { registerUser } = require('../controller/login.controller');

const registerRouter = express.Router();

registerRouter.post("/", registerUser);

module.exports = {
    registerRouter
}
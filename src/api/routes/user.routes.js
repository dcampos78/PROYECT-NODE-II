const express = require("express");
const passport = require("passport");
const { userRegister, userLogin, userLogout } = require("../controllers/user.controller");

const usersRouter = express.Router();


usersRouter.post("/register",userRegister);
usersRouter.post("/login", userLogin);
usersRouter.post("/logout", userLogout);


module.exports = usersRouter;
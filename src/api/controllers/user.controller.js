const User = require("../models/user.model");
const passport = require("passport");
const session = require("express-session");

const userRegister = (req, res, next) => {
    passport.authenticate('register', (error, user) => {
        if (error) {
            return next(error);
        }
        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }
            return res.status(200).json(user)
        });
    })(req);
};
const userLogin = (req, res, next) => {
    passport.authenticate('login', (error, user) => {
        if (error) return next(error)

        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }
            return res.status(200).json(user)
        });
    })(req);
};
const userLogout = (req, res, next) => {
    if (req.user) {
        req.logout(error => {
          if (error) {
            return next(error);
          }
          req.session.destroy(() => {
            res.clearCookie('connect.sid');
            return res.status(200).json("See you soon!");
          });
        });
      } else {
        return res.sendStatus(304);
      }
    };

module.exports = { userRegister, userLogin, userLogout };
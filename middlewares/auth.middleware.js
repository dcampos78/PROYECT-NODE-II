function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json("Usuario no logado!");
    }
}

module.exports = { isAuthenticated }
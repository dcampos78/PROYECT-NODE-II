const express = require("express");
const {getAuthors, getAuthorsById, getAuthorsByName, postAuthors, deleteAuthors, putAuthors, addBooks} = require("../controllers/author.controller");
const fileMiddlewares = require("../../../middlewares/file.middleware");
const authorsRouter = express.Router();

authorsRouter.get("/",getAuthors)
authorsRouter.get("/:id",getAuthorsById)
authorsRouter.get("/name/:name",getAuthorsByName)
authorsRouter.post("/", [fileMiddlewares.upload.single('picture'), fileMiddlewares.uploadToCloudinary],postAuthors)
authorsRouter.delete("/:id",deleteAuthors)
authorsRouter.put("/",putAuthors)
authorsRouter.put("/add-books", addBooks)



module.exports = authorsRouter;
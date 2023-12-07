const express = require("express");
const {getBooks,getBooksById, getBooksByName, postBooks, deleteBooks, putBooks} = require("../controllers/book.controller");
const fileMiddlewares = require("../../../middlewares/file.middleware");


const booksRouter = express.Router();


booksRouter.get("/",getBooks)
booksRouter.get("/:id",getBooksById)
booksRouter.get("/name/:name",getBooksByName)
booksRouter.post("/", [fileMiddlewares.upload.single('picture'), fileMiddlewares.uploadToCloudinary], postBooks)
booksRouter.delete("/:id",deleteBooks)
booksRouter.put("/:id",putBooks)
module.exports = booksRouter;
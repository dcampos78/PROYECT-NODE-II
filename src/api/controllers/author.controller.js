const Author = require("../models/author.model");

const getAuthors = async (req, res, next) => {
  try {
    const allAuthors = await Author.find().populate("titles","name series");
    return res.status(200).json(allAuthors);
  } catch (error) {
    return next(error);
  }
};
const getAuthorsById = async (req, res, next) => {
  const id = req.params.id;
  try {
      const authorsById = await Author.findById(id);
      if (!authorsById) {
          return res.status(404).json("No existe ningun autor con este ID");
      }
      return res.status(200).json(authorsById);
  }
  catch (error) {
    return next(error);
  }
};
const getAuthorsByName = async (req, res, next) => {
  const {name} = req.params;
  const regex = new RegExp(name, "i");
  try {
      const authorsByName = await Author.find({name: regex});
      if (!authorsByName.length) {
          return res.status(404).json("No existe ningun autor con este ID en la DB");
      }
      return res.status(200).json(authorsByName);
  }
  catch (error) {
      return next(error);
  }
};
const postAuthors = async (req, res, next) => {
  try {
    const authorPicture = req.file ? req.file_url : null;
    const newAuthor = new Author({
      name: req.body.name,
      country: req.body.country,
      titles: [],
      picture: authorPicture
    });
    const createdAuthor = await newAuthor.save();
    return res.status(201).json(createdAuthor);
  } catch (error) {
      return next(error);
  }
};
const deleteAuthors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: "Este ID de Autor no existe" });
    }
    return res.status(200).json(deletedAuthor);
  } catch (error) {
      return next(error);
  }
};
const putAuthors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const putAuthor = new Author(req.body);
    putAuthor._id = id;

    const updatedAuthor = await Author.findByIdAndUpdate(id, putAuthor, {
      new: true,
    });
    if (!updatedAuthor) {
      return res.status(404).json({ message: "Este ID de Autor no existe" });
    }
    return res.status(200).json(updatedAuthor);
  } catch (error) {
      return next(error);
  }
};
const addBooks = async (req, res, next) => {
  try {
      const {authorId} = req.body;
      const {bookId} = req.body;
      const authorUpdated = await Author.findByIdAndUpdate(
        authorId, 
        {$push: {Books: bookId}},
        { new: true });
      return res.status(200).json(authorUpdated);
  }
  catch (error) {
      return next(error);
  }
};

module.exports = { getAuthors, getAuthorsById, getAuthorsByName, postAuthors, deleteAuthors, putAuthors, addBooks };

const Book = require("../models/book.model");

const getBooks = async (req, res, next) => {
  try {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    return next(error);
  }
};
const getBooksById = async (req, res, next) => {
  const id = req.params.id;
  try {
      const booksById = await Book.findById(id);
      if (!booksById) {
          return res.status(404).json("No existe ningun author con ese ID");
      }
      return res.status(200).json(booksById);
  }
  catch (error) {
      return next(error);
  }
};
const getBooksByName = async (req, res, next) => {
  const {name} = req.params;
  const regex = new RegExp(name, "i");
  try {
      const booksByName = await Book.find({name: regex});
      if (!booksByName.length) {
          return res.status(404).json("No existe ningun libro con este nombre en la DB");
      }
      return res.status(200).json(booksByName);
  }
  catch (error) {
      return next(error);
  }
};
const postBooks = async (req, res, next) => {
  try {
    const bookPicture = req.file ? req.file.filename : null;
    const newBook = new Book({
      name: req.body.name,
      publication: req.body.publication,
      pages: req.body.pages,
      series: req.body.series,
      picture: bookPicture
    });
    const createdBook = await newBook.save();
    return res.status(201).json(createdBook);
  } catch (error) {
      return next(error);
  }
};
const deleteBooks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "El ID de este libro no existe" });
    }
    return res.status(200).json(deletedBook);
  } catch (error) {
      return next(error);
  }
};
const putBooks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const putBook = new Book(req.body);
    putBook._id = id;

    const updatedBook = await Book.findByIdAndUpdate(id, putBook, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "El ID de este libro no existe" });
    }
    return res.status(200).json(updatedBook);
  } catch (error) {
      return next(error);
  }
};

module.exports = { getBooks, getBooksById, getBooksByName, postBooks, deleteBooks, putBooks };

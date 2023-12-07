const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema(
    {
        name:{type:String,require:true},
        publication:{type:Number,require:true},
        pages: {type:Number,require:true},
        series:{type:String,require:true},
        picture:{type: String}
    },{
        timestamps:true
    }
)

const Book = mongoose.model("book", booksSchema);

module.exports = Book;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorsSchema = new Schema(
    {
        name:{type:String,require:true},
        country:{type: String},
        titles:[{type: Schema.Types.ObjectId,ref:"book"}],
    },{
        timestamps:true
    }
)

const Author = mongoose.model("author", authorsSchema);

module.exports = Author;

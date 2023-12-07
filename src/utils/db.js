const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;
const connect = async () => {
    try {
        const db = await mongoose.connect(MONGODB_URL);
        const {name,host} =db.connection;

        console.log(`${name} conected at host ${host}`);
    } catch (error) {
        console.log("Ha ocurrido un error al conectar la DB",error);
    }
}
module.exports = {connect}
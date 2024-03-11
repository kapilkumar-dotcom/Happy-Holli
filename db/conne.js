const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = process.env.MONGODB__URI;

const connectDB = async() => {
    try {

        await mongoose.connect(URI)
        console.log("DataBase connection successfull 👍👍👍");
    } catch (error) {
        console.error("database connection failed😡😡" , error);
        process.exit(0);
    }
}

module.exports = connectDB;
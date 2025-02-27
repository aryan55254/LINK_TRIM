const mongoose = require("mongoose");
require("dotenv").config(); 
//db connection
//check if mongo url is ok 
const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is missing in .env");
        process.exit(1);
    }
    //connect to mongo
    mongoose.set("strictQuery",false);
    mongoose.connect(process.env.MONGO_URI)
    .then(
        () => console.log("MongoDB Connected")
    )
    .catch(err => console.log(err));
}

module.exports = connectDB;

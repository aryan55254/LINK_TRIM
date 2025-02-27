require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const app = express();
app.use(express.json());
app.use(cors());
//check if mongo url is ok 
if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is missing in .env");
    process.exit(1);
}
//connect to mongo
mongoose.set("strictQuery",false);
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
).then(
    () => console.log("MongoDB Connected")
)
.catch(err => console.log(err));
//connect to routes
const urlroutes = require("./routes/urlroutes");
//use routes
app.use("/",urlroutes);
//server
const PORT = 5000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`));

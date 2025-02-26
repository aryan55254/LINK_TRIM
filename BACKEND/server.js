require("dotenv").config();
const express = require = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const app = express();
app.use(express.json());
app.use(cors());
//connect to mongo
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
).then(
    () => console.log("MongoDB Connected")
)
.catch(err => console.log(err));
//server
const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`));
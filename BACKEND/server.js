const express = require("express");
const cors = require ("cors");
const urlroutes = require("./routes/urlroutes");
const connectDB = require("./config/db");
//intialize express
const app = express();
//common middlewares
app.use(express.json());
app.use(cors());
//connect to db
connectDB();
//use routes
app.use("/", urlroutes);
//server
const PORT = 5000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`));

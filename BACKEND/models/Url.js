//url stored
const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
    longurl : {type :String , required : true},
    shorturl : {type:String ,required :true},
    datecreated : {type:Date , default: Date.now}
});
const URL = mongoose.model("URL",urlschema);
module.exports = URL;

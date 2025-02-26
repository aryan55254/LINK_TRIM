//url stored
const mongoose = require("mongoose");

const urlschema = new mongoose.schema({
    longurlid : {type :String , required : true},
    shorturlid : {type:String ,required :true},
    datecreated : {type:Date , default: Date.now}
});
const URL = mongoose.model("URL",urlschema);
module.exports = URL;

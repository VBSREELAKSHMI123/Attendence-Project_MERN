const mongoose = require("mongoose")
const schema = mongoose.Schema({
    date:{ type:Date,required:true },
    day:{ type:String},
    name:{ type:String,required:true }
})

const holidaymodel = mongoose.model("holidays",schema);
module.exports = {holidaymodel}
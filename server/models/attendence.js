const mongoose = require("mongoose")
const schema = mongoose.Schema({
    employee:{type:mongoose.Schema.Types.ObjectId,ref:'admins' , required:true},
    timein:{type:Date, default:Date.now},
    timeout:{type:Date , default:null}
})

const attendencemodel = mongoose.model("attendence",schema);
module.exports={attendencemodel}
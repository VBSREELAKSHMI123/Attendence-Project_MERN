const mongoose=require("mongoose");
const schema=mongoose.Schema({
    employee:{type:mongoose.Schema.Types.ObjectId,ref:'admins' , required:true},
    date:{type:Date,required:true},
    description:{type:String,required:true},
    status: { type: String, enum: [ "pending", "approved"],default: "pending" }, 
    verified: { type: Boolean, default: false }
})

const leavemodel =mongoose.model("leaves",schema);
module.exports={leavemodel}
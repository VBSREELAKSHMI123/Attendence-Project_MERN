const mongoose = require("mongoose")
const schema = mongoose.Schema({

    profile:{ type:String , required:true},
    firstname:{ type:String , required:true},
    lastname:{ type:String , required:true},
    lastname:{ type:String , required:true},
    phone:{ type:String , required:true, unique:true },
    email:{ type:String , required:true, unique:true },
    dob:{ type:String , required:true},
    maritalstatus:{ type:String , required:true},
    gender:{ type:String , required:true },
    nationality:{ type:String , required:true },
    address:{ type:String , required:true },
    city:{ type:String , required:true },
    state:{ type:String , required:true },
    pin:{ type:Number , required:true },
    username:{ type:String , required:true },
    type:{ type:String , required:true },
    department:{ type:String , required:true },
    designation:{ type:String , required:true },
    workingdays:{ type:String , required:true },
    joindate:{ type:String , required:true },
    mode:{ type:String , required:true },
    appletter:{ type:String , required:true },
    salaryslip:{ type:String , required:true },
    experience:{ type:String , required:true },
    pemail:{ type:String , required:true },
    reliving:{ type:String , required:true },
    experience:{ type:String , required:true },
    role:{ type:String , required:true },
    
})

const employeemodel = mongoose.model("employees",schema);
module.exports={employeemodel}

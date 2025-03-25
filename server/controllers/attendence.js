const {attendencemodel} = require("../models/attendence")

// ADD ATTENDENCE
const handleAddAttendence = async (req,res)=>{
    try{
    let {employee,timeout} = req.body
    if (!employee) {
        return res.status(400).json({status:"error",message:"Employee not found"})
    }
    if (timeout) {
        const attendence = await attendencemodel.findOneAndUpdate(
            {employee,timeout:null},
            {timeout:new Date()},
            {new:true}
        )
        if (!attendence) {
            return res.status(404).json({status:"error",message:"No Attendence Found"})
        }
        return res.json({status:"success",message:"Time-Out Recorded Successfully",attendence})
    } else {
         const attendence = new attendencemodel({ employee,timein:new Date(),timeout:null })
         await attendence.save()
         return res.json({status:"success",message:"Time-in Recorded Successfully"})
    }
} catch(error){
    console.error("Error Occured during marking attendence",error)
    return res.status(500).json({status:"error",message:"Error when recording attendence"})
}
}

// VIEW ATTENDENCE
const handleViewAttendence = (req,res)=>{
    attendencemodel.find().then(
        (response)=>{
            res.json(response)
            console.log(response)
        }
    ).catch(error=>{
        console.error("Error in View",error)
    })
}


// VIEW ATTENDENCE OF EMPLOYEE
const handleEmployeeAttendence = async (req,res)=>{
   try{
    const { id } = req.params
    if (!id) {
        return res.status(400).json({status:"error",message:"Employee not found"})
    }
    const attendence = await attendencemodel.find({employee:id})
    if (attendence.length===0) {
        return res.status(404).json({status:"error",message:"No Records Found"})
    }
      return res.json({status:"success",attendence})
   }
   catch (error) {
    console.error("Error fetching attendance:", error);
    return res.status(500).json({ status: "error", message: "Retrieving attendance records Failed" });
   }
}

module.exports={handleAddAttendence,handleViewAttendence,handleEmployeeAttendence}
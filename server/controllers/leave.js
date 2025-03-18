const { leavemodel }=require("../models/leave")

// ADD LEAVE
const handleAddLeave=async (req,res)=>{
    const input=req.body
    const leave=new leavemodel(input)
    await leave.save()
    res.status(200).json({status:"success",message:"Leave Applied Successfully"})
}

// VIEW LEAVE
const handleViewLeave=(req,res)=>{
    leavemodel.find().then(
        (response)=>{
            res.json(response)
        }
    ).catch((error)=>{
        console.error("error",error);
        
    })
}

// VIEW ONLY LEAVE
const handleViewEmpLeave = async (req,res)=>{
    const {id}=req.params
    if (!id) {
        return res.status(400).json({status:"error",message:"Employee not found"})
    }
    await leavemodel.find({employee:id}).then(
        (response)=>{
            res.json(response)
        }
    ).catch((error)=>{
        console.error("error",error);
        
    })
}

// VERIFY LEAVE
const handleVerifyLeave=async (req,res)=>{
    const { id }=req.params
    const {status}=req.body
    try{
       const updateleave = await leavemodel.findByIdAndUpdate(id,
        {verified:true , status:status},
        {new:true}
       )
       if (updateleave) {
        res.json({ status: 'success', message: 'Leave request verified successfully', updateleave });
    } else {
        res.status(404).json({ status: 'error', message: 'Leave request not found' });
    }
    }
    catch (error) {
        console.error('Error verifying leave request:', error);
        res.status(500).json({ status: 'error', message: 'Error verifying leave request' });
    }
}


module.exports={handleAddLeave,handleViewLeave,handleViewEmpLeave,handleVerifyLeave}
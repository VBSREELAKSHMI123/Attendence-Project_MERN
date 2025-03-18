const { employeemodel } = require("../models/employee")


// ADD EMPLOYEE
const handleAddEmp = async (req,res)=>{
    let input = req.body
    employee=new employeemodel(input)
    await employee.save()
    res.status(201).json({status:"success",message:"Employee add success"})
}

// VIEW EMPLOYEE
const handleViewEmp = (req,res)=>{
    employeemodel.find().then(
        (response)=>{
            res.json(response)
            console.log(response)
        }
    ).catch((error)=>{
        console.error("error occured",error)
    }

    )
}

// UPDATE EMPLOYEE DETAILS
const handleUpdateEmp = async (req,res)=>{
    try{
    const { id } = req.params
    const input = req.body
    const update = await employeemodel.findByIdAndUpdate(id,input,{new:true})
    if (!update) {
        return res.status(404).json({status:"error",message:"nothing to update"})
    }
    res.json({status:"success",message:"updated successfully"})
}catch(error){
   console.error("error",error) 
}
}

// DELETE EMPLOYEE
const handleDeleteEmp = async (req,res)=>{
    try{
        const { id } = req.params
        const empdelete = await employeemodel.findByIdAndDelete(id)
        if (!empdelete) {
            return res.status(404).json({status:"error",message:"No such Employee"})
        }
        res.json({status:"success",message:"Deleted successfully"})
    }
    catch(error){
        console.error("Errod occured during deletion",error);
        
    }
}



module.exports={handleAddEmp,handleViewEmp,handleUpdateEmp,handleDeleteEmp}
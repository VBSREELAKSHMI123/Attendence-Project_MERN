
const {holidaymodel} = require('../models/holiday')

// ADD HOLIDAY
const handleAddHoliday = (req,res)=>{
    const input = req.body
    const holiday = new holidaymodel(input)
    holiday.save()
        res.status(200).json({status:"success",message:"Holiday Added Successfully"})
   
}

// VIEW HOLIDAY
const handleHolidayView = (req,res)=>{
    holidaymodel.find().then(
        (response)=>{
            res.json(response)
        }
    ).catch(
        (error)=>{
            console.error("error",error);
            
        }
    )
}

module.exports={handleAddHoliday,handleHolidayView}
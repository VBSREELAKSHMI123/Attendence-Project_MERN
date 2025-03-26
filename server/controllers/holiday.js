
const {holidaymodel} = require('../models/holiday')

// ADD HOLIDAY
const handleAddHoliday = async (req,res)=>{
    const {date,name} = req.body
    const dateObj = new Date(date)
    const day = dateObj.toLocaleDateString("en-US", { weekday: "long" })
    const holiday = new holidaymodel({
        date:date,
        day:day,
        name:name})
    await holiday.save()
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
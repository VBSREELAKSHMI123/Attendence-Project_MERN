const express = require("express")
const router = express.Router()
const {handleAddHoliday,handleHolidayView} = require("../controllers/holiday")

router.post("/addholiday",handleAddHoliday)
router.get("/viewholiday",handleHolidayView)

module.exports=router;
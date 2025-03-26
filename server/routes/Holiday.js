const express = require("express")
const router = express.Router()
const {handleAddHoliday,handleHolidayView} = require("../controllers/holiday")
const {verifyToken, roleVerify}=require("../middlewares/authMiddleware")

router.post("/addholiday",verifyToken,handleAddHoliday)
router.get("/viewholiday",handleHolidayView)

module.exports=router;
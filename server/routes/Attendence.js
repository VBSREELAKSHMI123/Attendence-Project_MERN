const express = require("express")
const router = express.Router()
const {handleAddAttendence,handleViewAttendence,handleEmployeeAttendence} = require("../controllers/attendence")
const {verifyToken, roleVerify}=require("../middlewares/authMiddleware")

// router.route("/attendence").post(handleAddAttendence).get(handleViewAttendence)
// router.route("/view/:id").post(handleEmployeeAttendence)

router.post("/addattendence",handleAddAttendence)
router.get("/viewattendence",roleVerify,handleViewAttendence)
router.get("/viewonlyAttendence/:id",roleVerify,handleEmployeeAttendence)

module.exports=router;



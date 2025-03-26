const express = require("express")
const router = express.Router()
const {handleAddAttendence,handleViewAttendence,handleEmployeeAttendence} = require("../controllers/attendence")
const {verifyToken, roleVerify}=require("../middlewares/authMiddleware")

// router.route("/attendence").post(handleAddAttendence).get(handleViewAttendence)
// router.route("/view/:id").post(handleEmployeeAttendence)

router.post("/addattendence/:id",handleAddAttendence)
router.get("/viewattendence",verifyToken,handleViewAttendence)
router.get("/viewonlyAttendence/:id",verifyToken,handleEmployeeAttendence)

module.exports=router;



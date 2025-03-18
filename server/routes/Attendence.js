const express = require("express")
const router = express.Router()
const {handleAddAttendence,handleViewAttendence,handleEmployeeAttendence} = require("../controllers/attendence")

// router.route("/attendence").post(handleAddAttendence).get(handleViewAttendence)
// router.route("/view/:id").post(handleEmployeeAttendence)

router.post("/addattendence",handleAddAttendence)
router.get("/viewattendence",handleViewAttendence)
router.get("/viewonlyAttendence/:id",handleEmployeeAttendence)

module.exports=router;



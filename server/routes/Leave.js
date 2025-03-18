const express = require("express")
const router = express.Router()
const {handleAddLeave,handleViewLeave,handleViewEmpLeave,handleVerifyLeave}=require("../controllers/leave")

router.post("/addleave",handleAddLeave)
router.get("/viewleave",handleViewLeave)
router.get("/viewempleave/:id",handleViewEmpLeave)
router.post("/verifyleave/:id",handleVerifyLeave)

module.exports=router;
const express = require("express")
const router = express.Router()
const {handleAddLeave,handleViewLeave,handleViewEmpLeave,handleVerifyLeave, handleDeleteLeave}=require("../controllers/leave")

router.post("/addleave",handleAddLeave)
router.get("/viewleave",handleViewLeave)
router.get("/viewempleave/:id",handleViewEmpLeave)
router.patch("/verifyleave/:id",handleVerifyLeave)
router.delete("/deleteleave/:id",handleDeleteLeave)

module.exports=router;
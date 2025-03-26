const express = require("express")
const router = express.Router()
const {handleAddLeave,handleViewLeave,handleViewEmpLeave,handleVerifyLeave, handleDeleteLeave}=require("../controllers/leave")
const {verifyToken, roleVerify}=require("../middlewares/authMiddleware")

router.post("/addleave",handleAddLeave)
router.get("/viewleave",verifyToken,handleViewLeave)
router.get("/viewempleave/:id",handleViewEmpLeave)
router.patch("/verifyleave/:id",verifyToken,handleVerifyLeave)
router.delete("/deleteleave/:id",handleDeleteLeave)

module.exports=router;
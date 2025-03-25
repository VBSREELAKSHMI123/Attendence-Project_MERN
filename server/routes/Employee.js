const express = require("express")
const router = express.Router()
const {handleAddEmp,handleViewEmp, handleUpdateEmp,handleDeleteEmp,handleSearchEmp} = require("../controllers/employee")
const { verifyToken } = require("../middlewares/authMiddleware");


router.post("/addemp",handleAddEmp)
router.get("/viewemp",verifyToken,handleViewEmp)
router.put("/updateemp/:id",handleUpdateEmp)
router.delete("/deleteemp/:id",handleDeleteEmp)
router.get("/searchemp",handleSearchEmp)

module.exports=router;
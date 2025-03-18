const express = require("express")
const router = express.Router()
const {handleAddEmp,handleViewEmp, handleUpdateEmp,handleDeleteEmp} = require("../controllers/employee")


router.post("/addemp",handleAddEmp)
router.get("/viewemp",handleViewEmp)
router.put("/updateemp/:id",handleUpdateEmp)
router.delete("/deleteemp/:id",handleDeleteEmp)

module.exports=router;
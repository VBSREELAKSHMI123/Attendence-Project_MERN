const express = require("express")
const router = express.Router()
const {handleAddUser , handleUserLogin, handleUserView}=require("../controllers/admin")

// USER REGISTER
router.post("/adduser", handleAddUser);


//  USER LOGIN   
router.post("/login", handleUserLogin);

router.get("/userview",handleUserView)

module.exports = router;



const express = require("express")
const router = express.Router()
const { handleAddUser, handleUserLogin, handleUserView } = require("../controllers/admin");
const { verifyToken } = require("../middlewares/authMiddleware");


// USER REGISTER
router.post("/adduser", handleAddUser);

router.post("/login", handleUserLogin);

router.get("/userview", verifyToken, handleUserView)

module.exports = router;


// router.delete

// user.get getusers
// user.post addusers
// user.delete deleteusers
// user.get getusers
// router.route("/user").post(handleAddUser).get()


// router.route("/user").post(handleAddUser).get(handleUserView)
// router.post("/userlogin",handleUserLogin)

//  USER LOGIN 

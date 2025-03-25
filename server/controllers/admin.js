const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { adminmodel } = require("../models/admin")
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { SECRET_KEY } = process.env



// const generateHashedPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10)
//     return bcrypt.hash(password, salt)
// }


// USER REGISTER
const handleAddUser = async (req, res) => {
    try {
        let { name, email, password, role } = req.body
        if (role && !["admin", "user"].includes(role)) {
            return res.status(400).json({ status: "Invalid role. Allowed roles: 'admin and employee" });
        }

        // let hashedpassword = await generateHashedPassword(password)
        let hashedpassword = await bcrypt.hash(password, 10)
        console.log(hashedpassword);

        let admin = new adminmodel({
            name, email, password: hashedpassword, role
        })
        await admin.save();
        res.status(201).json({ message: "Add user Successfully", success: true });
    }
    catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ status: "error", message: error.message });
    }
}

// USER LOGIN
const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // const user = await adminmodel.findOne({ email: email, role: { $in: ["admin", "user"] } });
        const user = await adminmodel.findOne({ email: email });
        console.log("user", user);


        if (!user) {
            return res.status(400).json({ message: "Invalid user", success: false });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }
        const token = jwt.sign(
            { user_id: user._id, user_role: user.role },
            SECRET_KEY,
            { expiresIn: "1d" }
        );
        res.status(200).json({
            success: true,
            token,
            message: "Login Successfully"
        });

    } catch (error) {
        // console.error("Login error:", error);
        res.status(500).json({ message: error.message, success: false });
    }
}

// VIEW USER
const handleUserView = async (req, res) => {
    try {
        const users = await adminmodel.find()
        console.log("userid :",req.userId);
        console.log("role :",req.userRole);
        
        res.status(200).json({ success: true, message: "user list fetch completed", data: users });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }


    // adminmodel.find().then((response) => {

    //     // console.log(response)
    // }).catch(() => {
    //     res.json({ status: 'error' });
    // });
}

module.exports = { handleAddUser, handleUserLogin, handleUserView }

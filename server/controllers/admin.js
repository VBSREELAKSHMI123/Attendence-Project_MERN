const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { adminmodel } = require("../models/admin")
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const {SECRET_KEY} = process.env



const generateHashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

// USER REGISTER
const handleAddUser = async (req, res) => {
    try {
        let { name, email, password, role } = req.body
        if (role && !["admin", "user"].includes(role)) {
            return res.status(400).json({ status: "Invalid role. Allowed roles: 'admin and employee" });
        }

        let hashedpassword = await generateHashedPassword(password)
        let admin = new adminmodel({
            name, email , password: hashedpassword , role
        })

        await admin.save();
        res.json({ status: "success" });
    }
    catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
    
}

// USER LOGIN
const handleUserLogin = async (req,res)=>{
    try {
        const { email, password } = req.body; 
        const user = await adminmodel.findOne({ email: email, role: { $in: ["admin", "user"] } });

        if (!user) {
            return res.status(400).json({ message: "Invalid user" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign(
            { user_id: user._id, user_role: user.role },
            SECRET_KEY, 
            { expiresIn: "1d" }
        );
        res.status(200).json({
            status: "success",
            token,
            user_role: user.role,
                user_id: user._id,
                user_name: user.name,
                user_email: user.email,  
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
}

// VIEW USER
const handleUserView = (req,res)=>{
    adminmodel.find().then((response) => {
      res.json(response);
      console.log(response)
    }).catch(() => {
      res.json({ status: 'error' });
    });
}

module.exports = { handleAddUser , handleUserLogin, handleUserView}

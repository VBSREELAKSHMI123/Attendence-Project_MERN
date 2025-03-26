const jwt = require("jsonwebtoken")
const { SECRET_KEY } = process.env

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).json({ status: "error", message: "No token provided" });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ status: "error", message: "Token missing" });
        }
        const decodedJWT = jwt.verify(token, SECRET_KEY)
        req.userId = decodedJWT.user_id
        req.userRole = decodedJWT.role

        console.log("role------", decodedJWT.role);


        if (decodedJWT.role !== "admin") {
            res.status(400).json({ success: false, message: "admin can only access " })
        }
        next()
    } catch (error) {
        return res.status(403).json({ success: false, message: "Invalid or expired token" });
    }
}


const roleVerify = (req, res, next) => {
    try {
        const autheheader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).json({ status: "error", message: "No token providede" })
        }
        const token = autheheader.split(" ")[1]
        if (!token) {
            return res.status(401).json({ status: "error", message: "Token missing" });
        }

        const decoded = jwt.verify(token, SECRET_KEY)
        if (decoded.user_role != "user") {
            res.status(403).json({ success: false, message: "invalid or token expired" })
        }
        next()
    } catch (error) {
        return res.status(403).json({ success: false, message: "Invalid or expired token" });
    }
}


module.exports = { verifyToken, roleVerify }


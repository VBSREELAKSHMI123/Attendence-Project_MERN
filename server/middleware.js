const jwt = require("jsonwebtoken")
const {SECRET_KEY} = process.env

const AuthenticationToken = (AllowedRoles)=>{
   return (req,res,next)=>{
    const authheader=req.headers['authorization']
    if (!authheader) {
        res.status(401).json({status:"error",message:"No token Found"})
    }
    const token=authheader.split(" ")[1]
    jwt.verify(token,SECRET_KEY,(err,decoded)=>{
        if (err) {
            res.status(403).json({status:"error",message:"Invalid Token"})
        }
        if (decoded.role == !AllowedRoles) {
            res.status(403).json({status:"error",message:"No permission"}) 
        }
        req.role=decoded
    })
   }
    
}
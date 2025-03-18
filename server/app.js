
const adminRoute = require("./routes/Admin")
const attendenceRoute = require("./routes/Attendence")
const employeeRoute = require("./routes/Employee")
const leaveRoute = require("./routes/Leave")
const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json())



app.use(adminRoute)

app.use(attendenceRoute)

app.use(employeeRoute)

app.use(leaveRoute)

module.exports=app;
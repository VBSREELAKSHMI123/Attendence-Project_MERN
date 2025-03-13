const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")


// const users = [
//     { name: "JohnDoe", age: 28, place: "New York", phone: "123-456-7890" },
//     { name: "JaneSmith", age: 25, place: "Los Angeles", phone: "987-654-3210" },
//     { name: "MikeJohnson", age: 32, place: "Chicago", phone: "456-789-1234" },
//     { name: "EmilyBrown", age: 22, place: "Houston", phone: "321-654-9870" },
//     { name: "ChrisWilson", age: 30, place: "San Francisco", phone: "741-852-9630" },
//     { name: "SaraMiller", age: 27, place: "Miami", phone: "369-258-1470" },
//     { name: "DavidClark", age: 35, place: "Seattle", phone: "159-753-4862" },
//     { name: "OliviaWhite", age: 24, place: "Boston", phone: "852-963-7410" },
//     { name: "DanielLee", age: 29, place: "Denver", phone: "951-753-8520" },
//     { name: "SophiaHarris", age: 26, place: "Dallas", phone: "357-159-2840" }
//   ];

const app = express();
app.use(cors())
app.use(express.json())
// app.set("view engine","ejs")
// app.set("views",path.join(__dirname,"views"))


const adminRoute = require("./routes/Admin")
app.use(adminRoute)

// app.use(express.static(path.join(__dirname, "public")))

// app.get("/home", (req, res) => {

//     const htmlContent = fs.readFileSync(path.join(__dirname, "templates","home.html"), "utf-8")
//     res.send(htmlContent.replace('{{%TITLE%}}', 'HOME'))
// })

// app.get("/about", (req, res) => {

//     const htmlContent = fs.readFileSync(path.join(__dirname, "/templates/home.html"), "utf-8")
//     res.send(htmlContent.replace('{{%TITLE%}}', 'ABOUT'))
// })

// app.get("/users", async (req,res)=>{
//     try {
//         const users = await adminmodel.find()
//         res.render("index",{users})
//     } catch (error) {
//         console.error("Error:", error);
//     }
// })




app.listen(8081, () => {
    console.log("server started")
})

module.exports=app;
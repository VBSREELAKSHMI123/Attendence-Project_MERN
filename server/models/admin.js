const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "name": { type: String, required: true },
    "email": { type: String, required: true, unique: true },
    // "designation": { type: String, required: true },
    // "department": { type: String, required: true },
    // "phone": { type: String, required: true, unique: true },
    "password": { type: String, required: true },
    "role": { type: String, enum: ['admin', 'user'] }

})

let adminmodel = mongoose.model("admins", schema);

module.exports = { adminmodel }
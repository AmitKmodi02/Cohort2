// Database me kuch v store krwana hai to phle hme bataan hota hai ki hm jo deta store krege wo data kya hoga is format ko schema bolte hai

// DB ke lang me DATABASE ko format nah bolke schema bolte hai

// modal ka mtlb notes se releted kuch v create krna hai to modal ka hona bahut jaruri hai uske bina kuch v nhi kr skte hai humlog

// same data ko mongoose me rakhne ko collection bolte hai

const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

// modal created
const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel
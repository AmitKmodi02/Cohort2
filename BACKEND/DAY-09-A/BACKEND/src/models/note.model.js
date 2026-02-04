const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
})

// koi operation create krne ke liye hm modal ka use krte hai iske bina possible nhi hai kuch bhi krna

const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel
const mongoose = require("mongoose")
// const noteModel = require("../../../../DAY-09-A/BACKEND/src/models/note.model")

const newNote = new mongoose.Schema({
    title:String,
    description:String,
})

// create modal without this we cant perform any operation

const noteModel = mongoose.model("Mama",newNote)

module.exports = noteModel
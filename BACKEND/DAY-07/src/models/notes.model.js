const mongoose = require("mongoose")

// schema ek format hota hai isme hum db ko bata rhe hote hai ki hum kis fromat me db ko store kr rhe honge 

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
})


// koi v operation krne ke liye hume model ko create kiya jaata hai
// iske bina kuch v nhi hoga
const noteModel = mongoose.model("notes",noteSchema)



module.exports = noteModel
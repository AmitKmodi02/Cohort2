// Server ko create krna
// Server ko config krne ke liye

const express = require("express")
const noteModel = require("./models/notes.model")

const app = express()
app.use(express.json());

// POST/notes

app.post("/notes",async(req,res)=>{

    const { title,description} = req.body //yaha se data aayega

    // YE note create karegi
    const note = await noteModel.create({
        title, description
    })

    res.status(201),json({
        message:"Note created successfully",
        note
    })
})


// Get//notes


module.exports = app
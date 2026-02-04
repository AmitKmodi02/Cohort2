/**
 * server ko create krna
 * server ko config krna
 */

const express= require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

/**
 * POST method
 * api/notes
 * create the notes 
 * req.body = {title,description}
 */

app.post("/api/notes", async(req,res) =>{
    const {title,description} = req.body

    const notes = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note is create successfully",
        notes
    })
})

/**
 * Get Method
 * api/notes
 * fetch all notes data
 */

app.get("/api/notes",async (req,res)=>{

     const note =  await noteModel.find()

     res.status(200).json({
        message:"Note Fetch Successfully",
        note
     })
})


/**
 * Delete notes
 * Delete any notes by id
 * api/notes/:id
 * delete note with the id from req.params
 */

app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    
   const note = await noteModel.findByIdAndDelete(id)

   res.status(200).json({
    message:"Note is deleted successfully",
    note
   })
})


/**
 * PATCH/api/notes/:id
 * to update a note
 * req.body = {description}
 */

app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} = req.body

    const note = await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"Note Updated successfully",
        note
    })
})

/**
 * wild card entry
 */

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname),"..","/pubic/index.html")
})

module.exports = app
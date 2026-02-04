/**
 * server ko create krna
 * server ko config krna
 */

const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")


const app = express()
app.use(express.json())
app.use(cors()) //frontend se backend me add krne ke liye
//hum agr jo api nhi banaye honge uska api ko dikhane ke liye middle ware hai 
// ye public file ke andr jo file rehti hai use available bana deti hai
/**
 * http://localhost:3000/assets/index-Ch0thcvW.js
 * http://localhost:3000/assets/index-Dloq_N2r.css
 */
app.use(express.static("./public"))

/**
 * POST method
 * api/notes
 * create the notes 
 * req.body = {title,description}
 */

app.post("/api/notes",async(req,res)=>{
    const{title,description} = req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"NOte Created Successfully",
        note
    })
})

/**
 * Get Method
 * api/notes
 * fetch all notes data
 */

app.get("/api/notes",async (req,res)=>{
   const notes =  await noteModel.find()

   res.status(200).json({
    message:"Fetch data succesfully",
    notes
   })
})

/**
 * Delete notes
 * Delete any notes by id
 * api/notes/:id
 * delete note with the id from req.params
 */

app.delete("/api/notes/:id",async (req,res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id)


    res.status(200).json({
        message:"Note Deleted successfully"
    })
    
})

/**
 * PATCH/api/notes/:id
 * to update a note
 * req.body = {description}
 */

app.patch("/api/notes/:id",async (req,res)=>{
    const id = req.params.id
    const {description} = req.body  

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"Note updated successfully"
    })
})


// Wild card route
app.use('*name',(req,res) =>{
    res.sendFile (path.join(__dirname,"..","/public/index.html"))
    // res.send("Wild card entry")
})

module.exports = app
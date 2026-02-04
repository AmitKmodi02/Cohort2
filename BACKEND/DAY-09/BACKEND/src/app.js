// server ko create krna
// server ko config krna


const express = require("express")
// yaha require isliye kiye quki hme api create krni thi or use mongodb  me save krni thi isliye 
const noteModel = require("./models/notes.model.js")

const app = express();
app.use(express.json()); //middleware

// POST /api/notes
// create new note and save data in mongodb
// req.body = {title,description}

app.post("/api/notes",async (req,res) => {
    const { title , description} = req.body

    // ab note crete krna hai
    // yaha note create kiske saath krna hai isliye hmlog create ke andr object me type pass kr dete hai

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })
})


/*
* - GET/api/notes
* - Fetch all the data from mongodb and send them in the response
 */

app.get("/api/notes", async (req,res)=>{
    //data ko khojne ka kaam find method krti hai or lekar aa jati hai
    //find method hamesha array return kregi or ye data ko array of object me return kregi
    const notes = await noteModel.find()

    res.status(200).json({
        mesage:"Notes fetch successfully",
        notes
    })
})

/**
 * - DELETE/api/notes/:id
 * - Delete note with the help of id from req.params
 */

app.delete("/api/notes/:id",async (req,res)=>{
    const id = req.params.id

    // console.log(id)
    // findByIdAndDelete se hm jo data base me data banaye honge uski id find krega or usko database se delte kr dega iska yahi use hai

    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Notes deleted successfully",
    })
})

/**
 * - PATCH/api/notes/:id
 * - Update the description of the note by ID
 * - req.body = {description}
 */

app.patch("/api/notes/:id",async (req,res)=>{
    const id  = req.params.id
    const{description} = req.body

    // findByIdAndUpdate method ki wajah se hm id ko find krege or use update kr denge isme id ko pehle pass krege or jo change krna chate hai use iske bagal me bhej denge like description but jo mujhe update krna hai use hmlog object ki form me bhejege 
    await noteModel.findByIdAndUpdate(id, {description})
    res.status(200).json({
        message:"Note updated successfully."
    })
})

module.exports = app
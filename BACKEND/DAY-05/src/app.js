// server create klrna
// server config krna


const express = require("express");


const app = express(); /* server create ho gya */

app.use(express.json()) /* ye middleware hai jo humare request ke body ko json me convert kar dega */


const notes =[]

// POST /notes/create
app.post("/notes",(req,res) =>{
    console.log(req.body); //yaha pr data aayega
    notes.push(req.body)
    
    res.status(201).json({
        message:"note create successfully"
    })
    // res.send("note created successfully")
})

// GET /notes
app.get("/notes",(req,res) =>{
    res.status(200).json({
        notes :notes,
    })
})

// DElETE /notes/:index
app.delete("/notes/:index",(req,res) =>{
    delete notes[req.params.index]
    res.status(200).json({
        message:"note deleted successfully"
    })
})


// PATCH /notes/:index
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].title = req.body.title
    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports = app;
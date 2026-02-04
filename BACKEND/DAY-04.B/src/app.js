/*
-yaha server create kiya jaata hai
-server config krna yahi hota hai
*/


const express  = require("express");

const app =express(); /* server create ho gya */

app.use(express.json()); /* ye middleware hai jo humare request ke body ko json me convert kar dega */

const notes =[]


app.get("/",(req,res) =>{
    res.send("hello world from day 4 B");
})



app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body)

    console.log(notes);

    res.send("note created successfully")
})


// GET /notes => get all notes

app.get("/notes",(req,res) =>{
    res.send(notes)
})


// DELETE /notes/:index => delete a note by index

app.delete("/notes/:index",(req,res) =>{
    delete notes[req.params.index];
    res.send("notes deleted successfully")
})


// PATCH /notes/:index => update a note by index

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].name = req.body.name;

    res.send("note updated successfully")
})


module.exports = app;
/*

-server create krna
-server configure krna

*/


const express = require("express");

const notes =[
    // {
    //     title:"my fisrt title 1",
    //     description:"my first description 1"
    // }
]

const app = express(); /* server create ho gya */

app.use(express.json()) /* ye middleware hai jo humare request ke body ko json me convert kar dega */

app.get("/",(req,res) =>{
    res.send("hello duniya waloooo....")
})


// sbse phle hum endpoint banayenge get all notes ka
// POST /notes  => create a new note
app.post("/notes",(req,res) =>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes);
    

    res.send("note created successfully")
})


// GET /notes => get all notes
// client saare notes dekhna chahta hai to is API ko call karega
app.get("/notes",(req,res) =>{
    res.send(notes)
})

// ab client kisi notes ko delete karna chahta hai to wo is API ko call karega uska naam hai DELETE /
// param use krenge yaha per

// DELETE /notes/:index => delete a note by index
// DELETE /notes/0 => ye request aayegi to hum notes array me se 0th index wala note delete kar denge
// yaha pr jo :index hai wo ek placeholder hai jaha pr client apna index de sakta hai use dynamic kaehte hai
// yaha pe slace ke baad hme pta nhi hoti ki kon si valye aane wali hain isliye ise hmelog : index likhte hain or is slace ke baad jo v value aane wali hai wo rahegi dynamic

// req.params ke through hum is dynamic value ko access kar sakte hain
// req.param ka use hm tab krte hai jab value bahut hi dynamic ho ex- id , index , userId etc ya simple word me bole toh bahut choti value ho jo change hoti rahe

// req.body ka use hm tab krte hai jab value thodi badi ho ex- title , description , content etc ya simple word me bole toh thodi badi value ho jo change hoti rahe

app.delete("/notes/:index",(req,res) =>{
    // console.log(req.params.index);
    delete notes[req.params.index]

    res.send("note deleted successfully...")

    console.log(notes);
})


// ab hame aisa API create karna hai jisse client apne note description ko update kar sake uske liye ham PATCH method ka use karenge

// PATCH /notes/:index => update a note by index
// req.body me data aayega jisse hme update karna hai
// req.body ={ description :- "sample sodified description" .}

app.patch("/notes/:index",(req,res)=>{

    notes[ req.params.index ].description = req.body.description

    res.send("note updated successfully...")
})

module.exports = app
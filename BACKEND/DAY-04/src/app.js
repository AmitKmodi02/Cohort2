/*
src file ke andr hmlog ye dono kaam krte hai
-server create krna
-server ko config krna

*/ 


const express = require("express");



// Task -crete a notes and impliment HTTP method

// here we store every notes in the form of object inside an array
const notes =[
    { 
        title:"test title 1",
        description:"test description 1"
    }
]


// is array ke andr notes crete krne ka structure kuch is tarah hoga ki mujhe yaha  par ek API create krni hai or us API ka main kaam ye hoga ki uer title or desc bhejegea ke data ko server me bhejega or server is title or decs ke saath is data ko notes array me store krdega or ye data req.body ke andr aayega


const app = express(); //server create ho jaata hai

app.use(express.json()); // ye middleware hai jo hmlog ko req.body use krne me help krta hai

app.get("/",(req,res) =>{
    res.send("hello world");
})


// ye GET request hai jo home route ke liye hai
// we crrate new resource - notes
// methoad name post
// API name notes

app.post("/notes",(req,res) =>{
    console.log(req.body);
    // notes.push(req.body); // jo bhi data user bhejega wo notes array me push ho jaayega

    res.send("note added successfully");
})
    

module.exports = app
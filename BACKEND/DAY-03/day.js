const express = require('express');

const app =express();

// app.get('/',(req,res) =>{
//     res.send('Hello EXpress')
// })


const notes =[]

// API to create about page

app.use(express.json());

app.post("/about",(req,res)=>{

    console.log(req.body);

    notes.push(req.body);
    

    res.send("notes is created successfully");
})



app.listen(3000,()=>{
    console.log("Server is running in port 3000");
    
})
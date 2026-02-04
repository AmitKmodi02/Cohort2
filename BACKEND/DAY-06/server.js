// Server ko start krna
// servr ko data base se connect krna


const app =require("./src/app")
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://AmitM:mMIK8WrN21GOnRwf@cluster0.q3d2ltu.mongodb.net/DAY-06")
    .then(()=>{
        console.log("Connected to Database");
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})